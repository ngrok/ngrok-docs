package com.kyc.photokyc.permissions

import android.Manifest
import android.app.Activity
import android.content.Context
import android.content.pm.PackageManager
import android.os.Build
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.lifecycle.MutableLiveData

/**
 * Complete Permission Manager for Photo KYC System
 * Handles all runtime permissions for Android 6.0+
 */
class PermissionManager(private val activity: AppCompatActivity) {

    // ============= PERMISSION GROUPS =============

    // Critical permissions - required for basic functionality
    private val criticalPermissions = arrayOf(
        Manifest.permission.CAMERA,
        Manifest.permission.INTERNET
    )

    // Photo/Gallery permissions
    private val photoPermissions = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
        arrayOf(
            Manifest.permission.READ_MEDIA_IMAGES,
            Manifest.permission.READ_MEDIA_VIDEO
        )
    } else {
        arrayOf(
            Manifest.permission.READ_EXTERNAL_STORAGE,
            Manifest.permission.WRITE_EXTERNAL_STORAGE
        )
    }

    // Audio permissions
    private val audioPermissions = arrayOf(
        Manifest.permission.RECORD_AUDIO,
        Manifest.permission.RECORD_VIDEO
    )

    // Biometric permissions
    private val biometricPermissions = arrayOf(
        Manifest.permission.USE_BIOMETRIC,
        Manifest.permission.USE_FINGERPRINT
    )

    // All permissions combined
    private val allPermissions = criticalPermissions + photoPermissions + audioPermissions + biometricPermissions

    // ============= LIVEDATA =============
    
    val permissionStatus = MutableLiveData<PermissionStatus>()
    val deniedPermissions = MutableLiveData<List<String>>()

    // ============= ACTIVITY RESULT LAUNCHER =============

    private val multiplePermissionLauncher = activity.registerForActivityResult(
        ActivityResultContracts.RequestMultiplePermissions()
    ) { permissions ->
        handlePermissionResults(permissions)
    }

    // ============= PERMISSION CHECKING =============

    /**
     * Check if all critical permissions are granted
     */
    fun hasCriticalPermissions(): Boolean {
        return criticalPermissions.all { permission ->
            ContextCompat.checkSelfPermission(activity, permission) == PackageManager.PERMISSION_GRANTED
        }
    }

    /**
     * Check if all photo permissions are granted
     */
    fun hasPhotoPermissions(): Boolean {
        return photoPermissions.all { permission ->
            ContextCompat.checkSelfPermission(activity, permission) == PackageManager.PERMISSION_GRANTED
        }
    }

    /**
     * Check if all audio permissions are granted
     */
    fun hasAudioPermissions(): Boolean {
        return audioPermissions.all { permission ->
            ContextCompat.checkSelfPermission(activity, permission) == PackageManager.PERMISSION_GRANTED
        }
    }

    /**
     * Check if all biometric permissions are granted
     */
    fun hasBiometricPermissions(): Boolean {
        return biometricPermissions.all { permission ->
            ContextCompat.checkSelfPermission(activity, permission) == PackageManager.PERMISSION_GRANTED
        }
    }

    /**
     * Check if all permissions are granted
     */
    fun hasAllPermissions(): Boolean {
        return allPermissions.all { permission ->
            ContextCompat.checkSelfPermission(activity, permission) == PackageManager.PERMISSION_GRANTED
        }
    }

    /**
     * Get list of missing permissions
     */
    fun getMissingPermissions(): List<String> {
        return allPermissions.filter { permission ->
            ContextCompat.checkSelfPermission(activity, permission) != PackageManager.PERMISSION_GRANTED
        }
    }

    // ============= PERMISSION REQUESTING =============

    /**
     * Request critical permissions
     */
    fun requestCriticalPermissions() {
        val missing = criticalPermissions.filter { permission ->
            ContextCompat.checkSelfPermission(activity, permission) != PackageManager.PERMISSION_GRANTED
        }.toTypedArray()

        if (missing.isNotEmpty()) {
            multiplePermissionLauncher.launch(missing)
        } else {
            permissionStatus.value = PermissionStatus.CRITICAL_GRANTED
        }
    }

    /**
     * Request photo permissions
     */
    fun requestPhotoPermissions() {
        val missing = photoPermissions.filter { permission ->
            ContextCompat.checkSelfPermission(activity, permission) != PackageManager.PERMISSION_GRANTED
        }.toTypedArray()

        if (missing.isNotEmpty()) {
            multiplePermissionLauncher.launch(missing)
        } else {
            permissionStatus.value = PermissionStatus.PHOTO_GRANTED
        }
    }

    /**
     * Request audio permissions
     */
    fun requestAudioPermissions() {
        val missing = audioPermissions.filter { permission ->
            ContextCompat.checkSelfPermission(activity, permission) != PackageManager.PERMISSION_GRANTED
        }.toTypedArray()

        if (missing.isNotEmpty()) {
            multiplePermissionLauncher.launch(missing)
        } else {
            permissionStatus.value = PermissionStatus.AUDIO_GRANTED
        }
    }

    /**
     * Request all permissions (recommended on first launch)
     */
    fun requestAllPermissions() {
        val missing = allPermissions.filter { permission ->
            ContextCompat.checkSelfPermission(activity, permission) != PackageManager.PERMISSION_GRANTED
        }.toTypedArray()

        if (missing.isNotEmpty()) {
            multiplePermissionLauncher.launch(missing)
        } else {
            permissionStatus.value = PermissionStatus.ALL_GRANTED
        }
    }

    // ============= PERMISSION RESULT HANDLING =============

    private fun handlePermissionResults(permissions: Map<String, Boolean>) {
        val deniedList = permissions.filter { !it.value }.keys.toList()

        if (deniedList.isEmpty()) {
            permissionStatus.value = PermissionStatus.ALL_GRANTED
        } else {
            deniedPermissions.value = deniedList
            showPermissionDeniedDialog(deniedList)
        }
    }

    // ============= DIALOG & USER MESSAGING =============

    /**
     * Show dialog explaining why permissions are needed
     */
    fun showPermissionExplanationDialog(permission: String) {
        val message = when (permission) {
            Manifest.permission.CAMERA -> "Camera permission is required to take selfies and photos for KYC verification."
            Manifest.permission.READ_MEDIA_IMAGES -> "Gallery access is required to upload photos."
            Manifest.permission.READ_MEDIA_VIDEO -> "Video access is required to upload video for verification."
            Manifest.permission.RECORD_AUDIO -> "Microphone access is required for video recording."
            Manifest.permission.READ_EXTERNAL_STORAGE -> "Storage access is required to access photos."
            Manifest.permission.WRITE_EXTERNAL_STORAGE -> "Storage access is required to save photos."
            else -> "This permission is required for the app to function properly."
        }

        AlertDialog.Builder(activity)
            .setTitle("Permission Needed")
            .setMessage(message)
            .setPositiveButton("Grant") { _, _ ->
                when (permission) {
                    Manifest.permission.CAMERA -> requestCriticalPermissions()
                    Manifest.permission.READ_MEDIA_IMAGES,
                    Manifest.permission.READ_MEDIA_VIDEO -> requestPhotoPermissions()
                    Manifest.permission.RECORD_AUDIO -> requestAudioPermissions()
                    else -> requestAllPermissions()
                }
            }
            .setNegativeButton("Cancel", null)
            .show()
    }

    /**
     * Show dialog when permissions are denied
     */
    private fun showPermissionDeniedDialog(deniedPermissions: List<String>) {
        val permissionNames = deniedPermissions.map { getPermissionName(it) }.joinToString(", ")

        AlertDialog.Builder(activity)
            .setTitle("Permissions Denied")
            .setMessage("The following permissions are required for full functionality: $permissionNames\n\nPlease grant these permissions in Settings.")
            .setPositiveButton("Open Settings") { _, _ ->
                openAppSettings()
            }
            .setNegativeButton("Later", null)
            .show()
    }

    /**
     * Open app settings
     */
    private fun openAppSettings() {
        val intent = android.content.Intent(
            android.provider.Settings.ACTION_APPLICATION_DETAILS_SETTINGS,
            android.net.Uri.fromParts("package", activity.packageName, null)
        )
        activity.startActivity(intent)
    }

    /**
     * Get human-readable permission name
     */
    private fun getPermissionName(permission: String): String {
        return when (permission) {
            Manifest.permission.CAMERA -> "Camera"
            Manifest.permission.READ_MEDIA_IMAGES -> "Gallery"
            Manifest.permission.READ_MEDIA_VIDEO -> "Video"
            Manifest.permission.RECORD_AUDIO -> "Microphone"
            Manifest.permission.WRITE_EXTERNAL_STORAGE -> "Storage"
            Manifest.permission.INTERNET -> "Internet"
            Manifest.permission.USE_BIOMETRIC -> "Biometric"
            else -> permission.substringAfterLast('.')
        }
    }

    // ============= STATUS ENUM =============

    enum class PermissionStatus {
        CRITICAL_GRANTED,
        PHOTO_GRANTED,
        AUDIO_GRANTED,
        BIOMETRIC_GRANTED,
        ALL_GRANTED,
        SOME_DENIED,
        PENDING
    }
}
