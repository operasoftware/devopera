---
title: 'Opera TV Emulator: Getting Started'
authors:
- odevrel
intro: 'This article goes through the installation process of the Opera TV Emulator, and covers basic usage with keyboard and mouse as well as via the web remote. It also touches on the various media formats that are supported by default and explains how to install the H.264 decoder.'
tags:
- emulator
- tv
layout: article
---

- [Installation & launch](#install)
- [Using the Opera TV Emulator](#using)
- [Developing web projects with the Opera TV Emulator](#developing)
- [Supported media formats](#media)

## Installation & launch {#install}

The Opera TV Emulator is provided via a Linux system image that should be launched using an [Oracle VirtualBox][1] virtual machine. This ensures a test environment for web developers that is as close to a real device system as possible. VirtualBox works on the most common operating systems, such as Windows, Linux and Mac OS X.

[1]: https://www.virtualbox.org/

## Installation

1. Download and install the most recent **Oracle VirtualBox** package for your OS version from [the VirtualBox website][2]. For help with installation, see [the VirtualBox user manual][3].
2. Extract the TV Emulator VirtualBox image package to any folder you prefer to use as a virtual images store.
3. Double-click on the `TVEmulator.vbox` file - the virtual machine should be automatically installed in the VirtualBox application.

[2]: http://www.virtualbox.org/wiki/Downloads
[3]: http://www.virtualbox.org/manual/UserManual.html

You can also install the image from within the VirtualBox application. Just open the VirtualBox launcher and from the **Machine** menu, choose **Add** and open the `TVEmulator.vbox` file. You can also use the shortcut CTRL+A.

Some Linux distributions already ship with an open source version of VirtualBox. The Opera TV Emulator package was specifically developed for the [Oracle VirtualBox][4] binary version, so it may not work with this alternative open source version.

[4]: https://www.virtualbox.org/

## Launch

There are two ways to launch the Opera TV Emulator; you can double-click the `TVEmulator.vbox` file, or you can open the VirtualBox application, select the TV Emulator machine, and press **Start**.

If you plan to use the Opera TV Emulator regularly and want a quick way to launch it, you can create a shortcut to your `TVEmulator.vbox` file and place it on your desktop or in your applications menu.

## Using the Opera TV Emulator {#using}

### With a keyboard and mouse

The Opera TV Emulator can be used as a standard, lightweight browser. Using the address bar, you can navigate through Web pages.

To hide or show the address bar, press F1. Use the cursor keys for directional/spatial navigation, Enter to activate a link or control, and Backspace to go back.

To exit the TV Emulator, just click the **X** in the upper-right corner of the emulator screen in Linux and Windows, or upper-left corner for Mac OS X, and choose **Send the shutdown signal**; this option is usually selected by default.

It is not recommended to select **Power off the machine**, as this option will not allow the system to close in the correct way. This may be harmful for the TV Emulator's Linux system.

### With a web remote control

Another, much more powerful way of controlling the TV Emulator is through a web remote control.

To do this, launch a browser on your host machine and type `http://localhost:5555`. The remote itself works in all browser. However, if you'd like to take advantage of the [remote debugging][5] functionality with [Opera Dragonfly][6], you should use a recent version of the Opera desktop browser.

[5]: /articles/opera-tv-emulator-developer-tools/#debugging
[6]: http://www.opera.com/dragonfly

If you would like to use the web interface, you should make sure that no other application blocks port 5555.

You should now see the remote control image. The buttons on the remote control will operate the Opera TV Emulator as described below (see the information on adjusting the [remote control settings][7]):

[7]: /articles/opera-tv-emulator-developer-tools/#settings

![Remote control button functions](/articles/opera-tv-emulator-getting-started/remote.png)

## Developing web projects with the Opera TV Emulator {#developing}

With the Opera TV Emulator you can test any Web pages stored on your local computer. Firstly, you should share your working folder with the TV Emulator Linux system:

1. Make sure the TV Emulator is turned off
2. Open the VirtualBox application
3. Right-click on **TV Emulator** and select **Settings...**
4. From list on the left, choose **Shared Folders**
5. Click **+** and add folder you would like to share (select auto-mount)
6. Confirm your changes
7. Start the TV Emulator

To access your project files, type the following link in the TV Emulator: `file://localhost/mydata/sf_foldername`, where `foldername` is the name of the folder you set to be shared.

## Supported media formats {#media}

The following audio/video media formats are supported by the Opera TV Emulator:

<table>
<thead>
<tr>
	<th>Type</th>
	<th>Media</th>
	<th>MIME</th>
	<th>Container</th>
	<th>Video codec</th>
	<th>Audio codec</th>
</tr>
</thead>
<tbody>
<tr>
	<th rowspan="3">Video</th>
	<td rowspan="3">AVC</td>
	<td rowspan="3">video/mp4</td>
	<td rowspan="3">MP4</td>
	<td rowspan="3">
		MPEG-4 AVC(H.264)<br>
		Main and High Profiles<br>
		Up to Level 4(inclusive)
	</td>
	<td>
		MPEG-1/MPEG-2<br>
		Audio Layer 3<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
<tr>
	<td>
		AAC-LC<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
<tr>
	<td>
		HE-AAC<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
<tr>
	<th rowspan="4">Audio</th>
	<td rowspan="2">MP3</td>
	<td>audio/mp3</td>
	<td rowspan="2">MP3</td>
	<td rowspan="2"></td>
	<td rowspan="2">
		MPEG-1/MPEG-2<br>
		Audio Layer 3<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
<tr>
	<td>audio/mpeg</td>
</tr>
<tr>
	<td>AAC-LC</td>
	<td>audio/mp4</td>
	<td>MP4</td>
	<td></td>
	<td>
		AAC-LC<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
<tr>
	<td>HE-AAC</td>
	<td>audio/mp4</td>
	<td>MP4</td>
	<td></td>
	<td>
		HE-AAC<br>
		Mono/Stereo<br>
		16-320kbps; SBR/VBR<br>
		32kHz/44.1kHz/48kHz
	</td>
</tr>
</tbody>
</table>

### Installing the H.264 decoder

Distribution of the H.264 decoder is blocked by proprietary rights, so appropriate libraries are not provided in the TV Emulator package. Nevertheless, the license permits the end user to use the decoder for free. The steps below describe one possible way of installing this decoder.

1. Create shared folder with the name **plugins**. See the Installation Guide for information on how to share a folder.
2. Download the [gstreamer0.10-x264][8] package and the [libx264][9] package for i386 platform.
3. Unpack both packages (for Windows you can use an application such as [7zip][10] to do that).
4. From both packages, copy all files from the /usr/lib folder to your **plugins** folder.
5. Launch the TV Emulator.

[8]: http://debian-multimedia.org/pool/main/g/gst-plugins-ugly/gstreamer0.10-x264_0.10.17-0.0_i386.deb
[9]: http://debian-multimedia.org/pool/main/x/x264/libx264-112_0.svn20110115-0.0_i386.deb
[10]: http://www.7-zip.org/download.html

You should now be able to watch all H.264 media.