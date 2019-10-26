//
//  View.swift
//  keyDownViewController
//
//  Created by lsd on 7/4/17.
//  Copyright © 2017 inDabusiness. All rights reserved.
//

    import Cocoa

    class View: NSView {
        override func performKeyEquivalent(with event: NSEvent) -> Bool {
            return true
        }
    }
