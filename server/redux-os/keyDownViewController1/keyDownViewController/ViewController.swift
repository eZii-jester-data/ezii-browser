//
//  ViewController.swift
//  keyDownViewController
//
//  Created by lsd on 9/9/15.
//  Copyright © 2015 inDabusiness. All rights reserved.
//

import Cocoa
import HotKey
import Foundation
import WebKit

class ViewController: NSViewController {

    @IBOutlet var textField: NSTextField!
    @IBOutlet var webView: WKWebView!
    
    var mouseLocation: NSPoint!
    
    var window: NSWindow!

    var flags: Any!
    var keyDown: Any!
    
    var cmdDown: Bool!
    
    
    var overallRailsShellCommandsForEziiOSTasks: Array<Process>!
//    self.mouseLocation = NSEvent.mouseLocation()

    override func viewDidAppear() {
        self.window = self.view.window!
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        
        
//        let dispatchQueue = DispatchQueue(label: "EziiOSRubyOnRailsMain", qos: .background)
//        dispatchQueue.async{
//            self.railsShellCommandForEziiOS("s")
//        }
//        let dispatchQueue2 = DispatchQueue(label: "EziiOSRubyOnRailsWebpack-Dev-Server", qos: .background)
//        dispatchQueue2.async{
//            self.railsShellCommandForEziiOSWebpackDevServer("")
//        }
        
        let hotKey = HotKey(key: .v, modifiers: [.command, .option, .shift])
        
        hotKey.keyDownHandler = {
            print("Pressed at \(Date())")
        }
        
        hotKey.keyUpHandler = {
            print("Pressed at \(Date())")
        }
        
        flags = NSEvent.addGlobalMonitorForEvents(matching: .flagsChanged) {
            self.flagsChanged(with: $0)
            //            return $0
        }
        keyDown = NSEvent.addGlobalMonitorForEvents(matching: .keyDown) {
            self.keyDown(with: $0)
            //            return $0cc
        }
        textField.becomeFirstResponder()
        //        NSEvent.addLocalMonitorForEvents(matching: .scrollWheel) {
        //            self.scrollWheel(with: $0)
        //            return $0
        //        }
        
//        let url = "https://buildapart.io"

         var request = NSMutableURLRequest(url: NSURL(string: "https://buildapart.io") as! URL) as! URLRequest
        webView.load(request)
        webView.becomeFirstResponder()
        
        NSEvent.addGlobalMonitorForEvents(matching: [.mouseMoved]) { _ in
            self.mouseLocation = NSEvent.mouseLocation()
//            print(String(format: "%.0f, %.0f", self.mouseLocation.x, self.mouseLocation.y))
        }
    }
    
    @discardableResult
    func railsShellCommandForEziiOS(_ args: String...) -> Int32 {
        let task = Process()
        task.currentDirectoryPath = "/Users/lemonandroid/Banal Dropbox/random/ezii-os/"
        task.launchPath = "/Users/lemonandroid/Banal Dropbox/random/ezii-os/bin/rails"

        task.arguments = args
        task.launch()
        task.waitUntilExit()
        
        overallRailsShellCommandsForEziiOSTasks.append(task)
        return task.terminationStatus
    }
    
    @discardableResult
    func railsShellCommandForEziiOSWebpackDevServer(_ args: String...) -> Int32 {
        let task = Process()
        task.currentDirectoryPath = "/Users/lemonandroid/Banal Dropbox/random/ezii-os/"
        task.launchPath = "/Users/lemonandroid/Banal Dropbox/random/ezii-os/bin/webpack-dev-server"
        
        task.arguments = args
        task.launch()
        task.waitUntilExit()
        
        overallRailsShellCommandsForEziiOSTasks.append(task)
        return task.terminationStatus
    }
    
    @discardableResult
    func shell(_ args: String...) -> Int32 {
        let task = Process()
        task.currentDirectoryPath = "/Users/lemonandroid/Banal Dropbox/random/ezii-os/"
        task.launchPath = "/bin/sh"
        task.arguments = args
        task.launch()
        task.waitUntilExit()
        return task.terminationStatus
    }
    
    func hacky__terminateEziiOS() {
        shell("./counter-hacking/shutdown.ba⚕️⚕️⚕️⚕️sh")
    }
    
    func terminateEziiOS() {
        for task in overallRailsShellCommandsForEziiOSTasks {
            task.terminate();
        }
        
        shell("kill -9 $(cat ./tmp/pids/server.pid)")
        
        self.hacky__terminateEziiOS()
    }
    
    override func scrollWheel(with event: NSEvent) {
        super.scrollWheel(with: event)
        switch event.phase {
        case [.began]:
            print("scrollWheel began scrolling")
        case [.ended]:
            print("scrollWheel ended scrolling")
        default:
            break
        }
        print(event.locationInWindow)
        print(event.timestamp)
        print(event.window ?? "")
        print(event.windowNumber)
    }
    override func keyDown(with event: NSEvent) {
        textField.stringValue = "key = " + (event.charactersIgnoringModifiers
            ?? "")
        textField.stringValue += "\ncharacter = " + (event.characters ?? "")
        
        print(event.characters ??  "")
        if AXIsProcessTrusted() {
            print("AIX")
            if(cmdDown) {
                if((event.characters ??  "") == "v") {
                    print("AIX 2")
                    self.window.orderFrontRegardless();

                    self.window.setFrameTopLeftPoint(self.mouseLocation)
                    
                    
                    let url = URL(string: "https://google.com")!
                    
                    let task = URLSession.shared.dataTask(with: url) {(data, response, error) in

















                        
                        var request = NSMutableURLRequest(url: NSURL(string: "http://localhost:3000/user_text_copies/latest/pasted_one") as! URL)
                        let session = URLSession.shared
                        request.httpMethod = "POST"
                        
                        var params = ["username":"jameson", "password":"password"] as Dictionary<String, String>
                        
                        var err: NSError?
                        request.httpBody = try? JSONSerialization.data(withJSONObject: params)
                        request.addValue("application/json", forHTTPHeaderField: "Content-Type")
                        
                        var task = session.dataTask(with: request as! URLRequest) {(data, response, error) -> Void in
                            print("Response: \(response)")
                        }
                        
                        task.resume()

















                    }
                    
                    task.resume()
                }
            }
        }
        
    }
    override func flagsChanged(with event: NSEvent) {
        switch event.modifierFlags.intersection(.deviceIndependentFlagsMask) {
        case [.shift]:
            if AXIsProcessTrusted() {
                print("shift key is pressed")
            }
            
            if AXIsProcessTrusted() {
                print("AIX")
            }
        case [.control]:
            print("control key is pressed")
        case [.option] :
            print("option key is pressed")
        case [.command]:
            print("Command key is pressed")
            cmdDown = true
        case [.control, .shift]:
            print("control-shift keys are pressed")
        case [.option, .shift]:
            print("option-shift keys are pressed")
        case [.command, .shift]:
            print("command-shift keys are pressed")
        case [.control, .option]:
            print("control-option keys are pressed")
        case [.control, .command]:
            print("control-command keys are pressed")
        case [.option, .command]:
            print("option-command keys are pressed")
        case [.shift, .control, .option]:
            print("shift-control-option keys are pressed")
        case [.shift, .control, .command]:
            print("shift-control-command keys are pressed")
        case [.control, .option, .command]:
            print("control-option-command keys are pressed")
        case [.shift, .command, .option]:
            print("shift-command-option keys are pressed")
        case [.shift, .control, .option, .command]:
            print("shift-control-option-command keys are pressed")
        default:
            cmdDown = false
            print("no modifier keys are pressed")
        }
    }
    deinit {
        NSEvent.removeMonitor(flags)
        NSEvent.removeMonitor(keyDown)
        self.terminateEziiOS();
    }
}
