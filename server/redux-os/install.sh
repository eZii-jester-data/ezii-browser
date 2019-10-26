
#!/bin/bash
 # Install script

 # Identify the bundle path:
 # Try to get the USB bundle path on the fly
 bundle_path=`pkg-config libpcsclite --variable=usbdropdir`
 ini_path="/usr/local/scm/ini"
 ini_name="scl011.ini"

 [ ... distributionsabhängiges Ermitteln von "$bundle_path" ... ]

 # Installation of the driver bundle(s)
 # Create the appropriate directory for
 # placing the bundle(s)
 mkdir -p $bundle_path

 # Copy the driver bundle(s)
 echo "Copying driver bundle(s) to $bundle_path"
 cp -rf ./proprietary/*.bundle $bundle_path
 [ ... Fehlerbehandlung ... ]

 # Create symbolic link from open source
 # pcscd bundle path

 if [ "$bundle_path" !=      "/usr/local/pcsc/drivers" ]; then
         echo "Creating symbolic links from              /usr/local/pcsc/drivers"
         mkdir -p /usr/local/pcsc/drivers
         cd ./proprietary
         for bundle in *.bundle; do
             ln -sf $bundle_path/$bundle
                    /usr/local/pcsc/drivers
         done
         cd ..

         echo "Created symbolic links"
 fi
