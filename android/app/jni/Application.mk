FORCE_GYP := $(shell make -C ../../ GypAndroid.mk)
APP_ABI := all
APP_OPTIM := release
NDK_TOOLCHAIN_VERSION := clang
APP_PLATFORM := android-21
APP_STL := c++_shared
APP_BUILD_SCRIPT := jni/Android.mk
APP_MODULES := libhelloworld_jni
