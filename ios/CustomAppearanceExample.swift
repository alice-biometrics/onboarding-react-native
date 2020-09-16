//
//  CustomAppearanceExample.swift
//  AppOnboardingSample
//
//  Created by Adrian Garcia Garcia on 16/09/2020.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import AliceOnboarding


@objc public class CustomAppearanceExample: NSObject {
  public override init() {
    /*: For more information, see  https://docs.alicebiometrics.com/onboarding/sdk/ios/customisation.html */
    OnboardingAppearence.statusView.backgroundColor = UIColor.white
    OnboardingAppearence.iconsStyle = .shape
  }
}
