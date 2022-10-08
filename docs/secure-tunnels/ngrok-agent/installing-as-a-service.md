---
sidebar_position: 9
title: Installing as a Service
---

# ngrok as a Background Service
--------------------

The ngrok agent includes additional functionality that makes it easy to install and manage itself as a native operating system service on Windows, MacOS and Linux. This makes it extraordinarily easy to set up ngrok in a production configuration that will cause it to start on machine boot, restart after crashes, and integrate with the native tools system administrators are familiar with to manage and inspect its state.

When running as a service, the ngrok agent configures itself from its configuration file and starts all tunnels defined in the configuration file. When ngrok runs as a service, it executes the equivalent behavior of running `ngrok start --all`.

Note: Installing ngrok as a service requires admin or sudo permissions in most cases.

## Supported Systems

### Windows

On Windows, the ngrok agent installs itself as a Windows service. It can be managed via Windows Services and it logs all errors and warnings to the Windows event log.

### MacOS

On MacOS Darwin, the ngrok agent creates an appropriate plist file and installs itself to run via launchd. Warnings and errors are logged via syslog.

### Linux

On Linux, only systems with upstart or systemd installed are supported for service installation. If neither is installed, you will need to set up your own management of the ngrok process as a service. Warnings and errors are logged via syslog.

## Installation

Installing ngrok as a system service is the same on all on operating systems. First, create a configuration file somewhere on your machine. For this example, let's assume it's in `C:\ngrok\ngrok.yml`. In your configuration file, make sure you include an `authtoken` and define all of the tunnels that you want to start. Then run:

    ngrok service install --config C:\ngrok\ngrok.yml

This will validate that the configuration file is valid, and if so, install ngrok as a service using the given configuration file. The service installation includes the location of the ngrok binary, so don't move or delete it after you've installed the service.

## Management

After your service is installed, you probably want to start it. You can easily do that with:

    ngrok service start

ngrok exposes the following commands to make service administration easy. The commands take no arguments and do what you would expect.

*   `ngrok service start`
*   `ngrok service stop`
*   `ngrok service restart`
*   `ngrok service uninstall`
