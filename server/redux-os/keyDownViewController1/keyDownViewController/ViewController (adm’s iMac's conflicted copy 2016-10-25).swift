//
//  ViewController.swift
//  keyDownViewController
//
//  Created by lsd on 9/9/15.
//  Copyright © 2015 inDabusiness. All rights reserved.
//

import Cocoa

class ViewController: NSViewController {

    @IBOutlet var textField: NSTextField!
    @IBOutlet weak var inputText: NSTextField!
    var comandKeyDown = false
    
    override func viewDidLoad() {
        super.viewDidLoad()
        if let pdfURL = NSBundle.mainBundle().URLForResource("IBM412-CID", withExtension: "pdf"){
            if NSWorkspace.sharedWorkspace().openURL(pdfURL) {
                print("url successfully opened")
            }
        }
       
       
        NSEvent.addLocalMonitorForEventsMatchingMask(.KeyDownMask) { (aEvent) -> NSEvent? in
            self.keyDown(aEvent)
            return aEvent
        }
    }

    override var representedObject: AnyObject? {
        didSet {
        // Update the view, if already loaded.
        }
    }
    
    override func keyDown(theEvent:NSEvent) {
        print(comandKeyDown)
        print(theEvent.keyCode )
        if theEvent.keyCode == 36 && theEvent.modifierFlags.rawValue == 1048840 {
            print("command-return was pressed")
        }
        if theEvent.keyCode == 37 && theEvent.modifierFlags.rawValue == 1048840 {
            print("command-L pressed")
        }

        if theEvent.keyCode == 76 && theEvent.modifierFlags.rawValue == 1048840 {
            print("command-enter was pressed")
        }
        textField.stringValue = "key = " + (theEvent.charactersIgnoringModifiers
            ?? "")
        textField.stringValue += "\ncharacter = " + (theEvent.characters ?? "")
        textField.stringValue += "\nmodifier = " + theEvent.modifierFlags.rawValue.description
    }
    override func flagsChanged(theEvent: NSEvent) {
        switch theEvent.modifierFlags.rawValue {
            case 256:
                print("No modifiers keys are pressed")
            case 1048840 where theEvent.keyCode == 36:
                print("command-L pressed")
                
            case 0:
                print("")
            default:
                print(comandKeyDown)
        }
        comandKeyDown = theEvent.modifierFlags.rawValue == 1048840
        print(theEvent.modifierFlags.rawValue)
        if theEvent.modifierFlags.rawValue == 1048840 {
            print(comandKeyDown)
        }
    }
}

