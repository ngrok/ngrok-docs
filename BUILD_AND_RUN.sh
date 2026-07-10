#!/bin/bash

# ============================================================
# PHOTO KYC SYSTEM - COMPLETE BUILD AND RUN SCRIPT
# ============================================================

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# ============================================================
# FUNCTIONS
# ============================================================

print_header() {
    echo -e "${BLUE}\n========================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}========================================${NC}\n"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}\n"
}

print_error() {
    echo -e "${RED}❌ $1${NC}\n"
}

print_info() {
    echo -e "${YELLOW}ℹ️  $1${NC}\n"
}

# ============================================================
# STEP 1: CHECK REQUIREMENTS
# ============================================================

print_header "STEP 1: CHECKING REQUIREMENTS"

if ! command -v java &> /dev/null; then
    print_error "Java not found. Please install JDK 17+"
    exit 1
fi
print_success "Java found: $(java -version 2>&1 | head -n 1)"

if ! command -v git &> /dev/null; then
    print_error "Git not found. Please install Git"
    exit 1
fi
print_success "Git found"

if ! command -v adb &> /dev/null; then
    print_error "ADB not found. Please install Android SDK"
    exit 1
fi
print_success "ADB found"

# ============================================================
# STEP 2: CLONE REPOSITORY (IF NEEDED)
# ============================================================

print_header "STEP 2: REPOSITORY SETUP"

if [ ! -d "photo-kyc-system" ]; then
    print_info "Cloning repository..."
    git clone https://github.com/onlinetoolsserver-prog/photo-kyc-system.git
    print_success "Repository cloned"
else
    print_info "Repository already exists, updating..."
    cd photo-kyc-system
    git pull origin main
    cd ..
    print_success "Repository updated"
fi

cd photo-kyc-system

# ============================================================
# STEP 3: CHECKOUT FEATURE BRANCH
# ============================================================

print_header "STEP 3: CHECKOUT FEATURE BRANCH"

git fetch origin feature/photo-kyc-complete-setup
git checkout feature/photo-kyc-complete-setup
print_success "Branch checked out"

# ============================================================
# STEP 4: CLEAN BUILD
# ============================================================

print_header "STEP 4: CLEANING BUILD"

./gradlew clean
print_success "Clean complete"

# ============================================================
# STEP 5: DOWNLOAD DEPENDENCIES
# ============================================================

print_header "STEP 5: DOWNLOADING DEPENDENCIES"

./gradlew dependencies
print_success "Dependencies downloaded"

# ============================================================
# STEP 6: RUN TESTS
# ============================================================

print_header "STEP 6: RUNNING TESTS"

if ./gradlew test; then
    print_success "All tests passed"
else
    print_error "Tests failed"
    # Continue anyway
fi

# ============================================================
# STEP 7: BUILD DEBUG APK
# ============================================================

print_header "STEP 7: BUILDING DEBUG APK"

./gradlew assembleDebug
print_success "Debug APK built successfully"

# ============================================================
# STEP 8: DETECT CONNECTED DEVICES
# ============================================================

print_header "STEP 8: DETECTING DEVICES"

DEVICES=$(adb devices -l | grep "device" | grep -v "List of attached" | wc -l)

if [ "$DEVICES" -eq 0 ]; then
    print_error "No Android devices found!"
    print_info "Please connect an Android device and enable USB debugging"
    exit 1
fi

print_success "Found $DEVICES device(s)"
adb devices -l

# ============================================================
# STEP 9: INSTALL APK
# ============================================================

print_header "STEP 9: INSTALLING APK ON DEVICE(S)"

adb install -r app/build/outputs/apk/debug/app-debug.apk
print_success "APK installed successfully"

# ============================================================
# STEP 10: LAUNCH APP
# ============================================================

print_header "STEP 10: LAUNCHING APP"

adb shell am start -n com.kyc.photokyc/.MainActivity
print_success "App launched!"

# ============================================================
# STEP 11: SHOW LOGS
# ============================================================

print_header "STEP 11: DISPLAYING LOGS"

print_info "Press Ctrl+C to stop log streaming"
sleep 2
adb logcat | grep "photokyc"

# ============================================================
# COMPLETION
# ============================================================

print_header "🎉 SETUP COMPLETE!"

echo -e "${GREEN}Your Photo KYC app is running!${NC}"
echo -e "${GREEN}\n✨ Next Steps:${NC}"
echo -e "  1. Grant camera permission when prompted"
echo -e "  2. Click 'Quick KYC' button"
echo -e "  3. Select photo/video source"
echo -e "  4. Wait for automatic verification"
echo -e "  5. View results\n"
