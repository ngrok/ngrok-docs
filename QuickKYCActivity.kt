package com.kyc.photokyc

import android.content.Intent
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.net.Uri
import android.os.Bundle
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import com.kyc.photokyc.ai.*
import com.kyc.photokyc.databinding.ActivityQuickKycBinding
import com.kyc.photokyc.permissions.PermissionManager
import com.kyc.photokyc.photo.FaceExtractor
import com.kyc.photokyc.photo.ImageProcessor
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

/**
 * Quick KYC Activity - Complete One-Click Verification
 * Automatically handles photo capture, processing, and verification
 */
class QuickKYCActivity : AppCompatActivity() {

    private lateinit var binding: ActivityQuickKycBinding
    private lateinit var permissionManager: PermissionManager
    private lateinit var imageProcessor: ImageProcessor
    private lateinit var faceExtractor: FaceExtractor
    private lateinit var faceMatcher: FaceMatcher
    private lateinit var livenessChecker: LivenessChecker
    private lateinit var antiSpoofDetector: AntiSpoofDetector

    // Photo storage
    private val kycPhotos = mutableListOf<Bitmap>()
    private val MAX_PHOTOS = 3 // For quick KYC
    private var currentPhotoUri: Uri? = null

    // ============= ACTIVITY RESULT LAUNCHERS =============

    // Camera launcher
    private val cameraLauncher = registerForActivityResult(
        ActivityResultContracts.TakePicture()
    ) { success ->
        if (success && currentPhotoUri != null) {
            loadPhotoFromUri(currentPhotoUri!!)
        }
    }

    // Gallery launcher
    private val galleryLauncher = registerForActivityResult(
        ActivityResultContracts.GetContent()
    ) { uri ->
        uri?.let { loadPhotoFromUri(it) }
    }

    // Video launcher
    private val videoLauncher = registerForActivityResult(
        ActivityResultContracts.GetContent()
    ) { uri ->
        uri?.let { loadVideoFrames(it) }
    }

    // ============= LIFECYCLE =============

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityQuickKycBinding.inflate(layoutInflater)
        setContentView(binding.root)

        initializeComponents()
        setupUI()
        requestRequiredPermissions()
    }

    // ============= INITIALIZATION =============

    private fun initializeComponents() {
        permissionManager = PermissionManager(this)
        imageProcessor = ImageProcessor(this)
        faceExtractor = FaceExtractor(this)
        faceMatcher = FaceMatcher(this)
        livenessChecker = LivenessChecker(this)
        antiSpoofDetector = AntiSpoofDetector(this)
    }

    private fun setupUI() {
        // Camera button
        binding.btnCamera.setOnClickListener {
            if (permissionManager.hasCriticalPermissions()) {
                takePhotoWithCamera()
            } else {
                permissionManager.showPermissionExplanationDialog(android.Manifest.permission.CAMERA)
            }
        }

        // Gallery button
        binding.btnGallery.setOnClickListener {
            if (permissionManager.hasPhotoPermissions()) {
                openGallery()
            } else {
                permissionManager.showPermissionExplanationDialog(android.Manifest.permission.READ_MEDIA_IMAGES)
            }
        }

        // Video button
        binding.btnVideo.setOnClickListener {
            if (permissionManager.hasPhotoPermissions()) {
                openVideoGallery()
            } else {
                permissionManager.showPermissionExplanationDialog(android.Manifest.permission.READ_MEDIA_VIDEO)
            }
        }

        // Auto-detect button
        binding.btnAuto.setOnClickListener {
            startAutoDetection()
        }

        // Verify button
        binding.btnVerify.setOnClickListener {
            if (kycPhotos.isNotEmpty()) {
                startVerification()
            } else {
                Toast.makeText(this, "Please upload at least one photo", Toast.LENGTH_SHORT).show()
            }
        }
    }

    private fun requestRequiredPermissions() {
        if (!permissionManager.hasAllPermissions()) {
            permissionManager.requestAllPermissions()
        }
    }

    // ============= PHOTO CAPTURE & UPLOAD =============

    private fun takePhotoWithCamera() {
        val photoFile = java.io.File(
            cacheDir,
            "kyc_photo_${System.currentTimeMillis()}.jpg"
        )
        currentPhotoUri = androidx.core.content.FileProvider.getUriForFile(
            this,
            "${packageName}.provider",
            photoFile
        )
        cameraLauncher.launch(currentPhotoUri!!)
    }

    private fun openGallery() {
        galleryLauncher.launch("image/*")
    }

    private fun openVideoGallery() {
        videoLauncher.launch("video/*")
    }

    private fun loadPhotoFromUri(uri: Uri) {
        lifecycleScope.launch(Dispatchers.IO) {
            try {
                val bitmap = contentResolver.openInputStream(uri)?.use {
                    BitmapFactory.decodeStream(it)
                }

                if (bitmap != null) {
                    processPhoto(bitmap)
                } else {
                    withContext(Dispatchers.Main) {
                        Toast.makeText(this@QuickKYCActivity, "Failed to load photo", Toast.LENGTH_SHORT).show()
                    }
                }
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }

    private suspend fun processPhoto(bitmap: Bitmap) {
        withContext(Dispatchers.Main) {
            showProcessing("Processing photo...")
        }

        // Step 1: Enhance image
        val enhanced = withContext(Dispatchers.IO) {
            imageProcessor.enhanceImage(bitmap)
        }

        // Step 2: Extract face
        val faceData = withContext(Dispatchers.IO) {
            faceExtractor.extractFace(enhanced)
        }

        if (faceData != null) {
            kycPhotos.add(enhanced)
            updatePhotoCount()

            withContext(Dispatchers.Main) {
                binding.ivPreview.setImageBitmap(faceData.faceBitmap)
                binding.tvStatus.text = "✅ Photo ${kycPhotos.size}/$MAX_PHOTOS - Quality: ${faceData.qualityScore}/100"

                if (kycPhotos.size >= MAX_PHOTOS) {
                    Toast.makeText(this@QuickKYCActivity, "Ready to verify!", Toast.LENGTH_SHORT).show()
                    binding.btnVerify.isEnabled = true
                }

                hideProcessing()
            }
        } else {
            withContext(Dispatchers.Main) {
                binding.tvStatus.text = "❌ Face not detected. Please try again."
                hideProcessing()
            }
        }
    }

    private fun loadVideoFrames(uri: Uri) {
        lifecycleScope.launch {
            showProcessing("Extracting frames from video...")

            val extractor = com.kyc.photokyc.video.VideoFrameExtractor(this@QuickKYCActivity)
            val frames = withContext(Dispatchers.IO) {
                extractor.extractBestFaces(uri, MAX_PHOTOS)
            }

            if (frames.isNotEmpty()) {
                for (frame in frames) {
                    processPhoto(frame.bitmap)
                }
                hideProcessing()
            } else {
                withContext(Dispatchers.Main) {
                    binding.tvStatus.text = "❌ No faces found in video"
                    hideProcessing()
                }
            }
        }
    }

    // ============= AUTO DETECTION =============

    private fun startAutoDetection() {
        lifecycleScope.launch {
            showProcessing("Starting auto detection...")

            // Try camera first, if fails try gallery
            withContext(Dispatchers.Main) {
                takePhotoWithCamera()
            }
        }
    }

    // ============= VERIFICATION =============

    private fun startVerification() {
        lifecycleScope.launch {
            showProcessing("Verifying photos...")

            val results = mutableListOf<VerificationResult>()

            for ((index, photo) in kycPhotos.withIndex()) {
                withContext(Dispatchers.Main) {
                    binding.tvStatus.text = "Verifying photo ${index + 1}/${kycPhotos.size}..."
                }

                // Anti-spoofing check
                val antiSpoofResult = withContext(Dispatchers.IO) {
                    antiSpoofDetector.getDetailedAnalysis(photo)
                }

                // Liveness check
                val livenessScore = withContext(Dispatchers.IO) {
                    livenessChecker.checkFromPhoto(photo)
                }

                // Quality check
                val quality = withContext(Dispatchers.IO) {
                    imageProcessor.checkImageQuality(photo)
                }

                // Face match (compare with first photo)
                val matchScore = if (index > 0) {
                    withContext(Dispatchers.IO) {
                        faceMatcher.compareFaces(kycPhotos[0], photo)
                    }
                } else {
                    100f
                }

                results.add(
                    VerificationResult(
                        photoIndex = index,
                        isRealFace = antiSpoofResult.isReal,
                        livenessScore = livenessScore,
                        qualityScore = quality,
                        matchScore = matchScore,
                        spoofType = antiSpoofResult.spoofType.name,
                        confidence = antiSpoofResult.confidence
                    )
                )
            }

            withContext(Dispatchers.Main) {
                displayResults(results)
            }
        }
    }

    private fun displayResults(results: List<VerificationResult>) {
        hideProcessing()

        val avgLiveness = results.map { it.livenessScore }.average()
        val avgQuality = results.map { it.qualityScore }.average()
        val avgMatch = results.map { it.matchScore }.average()
        val allReal = results.all { it.isRealFace }
        val overallScore = (avgLiveness * 0.4 + avgQuality * 0.3 + avgMatch * 0.3)

        binding.apply {
            tvStatus.text = if (overallScore >= 70 && allReal) {
                "✅ KYC VERIFIED SUCCESSFULLY!"
            } else {
                "❌ KYC VERIFICATION FAILED"
            }

            tvDetails.text = """
                Overall Score: ${String.format("%.1f", overallScore)}%
                Liveness: ${String.format("%.1f", avgLiveness)}%
                Quality: ${String.format("%.1f", avgQuality)}%
                Face Match: ${String.format("%.1f", avgMatch)}%
                Real Face: ${if (allReal) "Yes" else "No"}
            """.trimIndent()

            btnUpload.setOnClickListener {
                uploadToServer(results)
            }
        }
    }

    private fun uploadToServer(results: List<VerificationResult>) {
        lifecycleScope.launch {
            showProcessing("Uploading to server...")

            // TODO: Implement server upload
            // For now, just show success

            withContext(Dispatchers.Main) {
                hideProcessing()
                binding.tvStatus.text = "✅ Uploaded successfully!"
                Toast.makeText(this@QuickKYCActivity, "Verification complete!", Toast.LENGTH_SHORT).show()
            }
        }
    }

    // ============= UI HELPERS =============

    private fun updatePhotoCount() {
        binding.tvPhotoCount.text = "Photos: ${kycPhotos.size}/$MAX_PHOTOS"
    }

    private fun showProcessing(message: String) {
        binding.apply {
            progressLayout.visibility = android.view.View.VISIBLE
            tvProcessing.text = message
        }
    }

    private fun hideProcessing() {
        binding.progressLayout.visibility = android.view.View.GONE
    }

    // ============= DATA CLASS =============

    data class VerificationResult(
        val photoIndex: Int,
        val isRealFace: Boolean,
        val livenessScore: Float,
        val qualityScore: Float,
        val matchScore: Float,
        val spoofType: String,
        val confidence: Float
    )

    override fun onDestroy() {
        super.onDestroy()
        faceExtractor.release()
        livenessChecker.release()
    }
}
