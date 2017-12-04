COVERAGE REPORT:
=============================================================================
Writing coverage object [/Users/jordanlee/Documents/W4156/litbit/coverage/coverage.json]
Writing coverage reports at [/Users/jordanlee/Documents/W4156/litbit/coverage]
=============================================================================

=============================== Coverage summary ===============================
Statements   : 84.62% ( 176/208 )
Branches     : 100% ( 14/14 )
Functions    : 100% ( 12/12 )
Lines        : 88% ( 44/50 )
================================================================================

CONTINUOUS INTEGRATION LOG:
Worker information
hostname: wjb-1.macstadium-us-se-1.travisci.net:40775054-1b8c-47ed-959e-a852733220e1
version: v2.11.0 https://github.com/travis-ci/worker/tree/c5a50948f067dea0c4e5811e9583fa0052ad4dc6
instance: 74b4a956-e905-4d27-bc47-ac425c17dae3:travis-ci-osx10.11-xcode7.3-1480691248 (via amqp)
startup: 1m15.839841679s
system_info
Build system information
Build language: objective-c
Build id: 282524908
Job id: 282524909
Runtime kernel version: 15.6.0
travis-build version: 125c5d1fa

Fix WWDRCA Certificate
$ rvm use
Warning! PATH is not properly set up, '/Users/travis/.rvm/gems/ruby-2.0.0-p648/bin' is not at first place,
         usually this is caused by shell initialization files - check them for 'PATH=...' entries,
         it might also help to re-add RVM to your dotfiles: 'rvm get stable --auto-dotfiles',
         to fix temporarily in this shell session run: 'rvm use ruby-2.0.0-p648'.
Using /Users/travis/.rvm/gems/ruby-2.0.0-p648
git.checkout
0.62s
$ git clone --depth=50 --branch=master https://github.com/JakeKwon/4156-homework4.git JakeKwon/4156-homework4
Cloning into 'JakeKwon/4156-homework4'...
remote: Counting objects: 14, done.
remote: Compressing objects: 100% (9/9), done.
remote: Total 14 (delta 1), reused 14 (delta 1), pack-reused 0
Unpacking objects: 100% (14/14), done.

$ cd JakeKwon/4156-homework4
$ git checkout -qf 381ad1e1ea20ffcc1b0fba3a286af8fb71431182
Disabling Homebrew auto update. If your Homebrew package requires Homebrew DB be up to date, please run `brew update` explicitly.
$ export HOMEBREW_NO_AUTO_UPDATE=1
rvm
12.73s
$ rvm use default
Using /Users/travis/.rvm/gems/ruby-2.0.0-p648

** Updating RubyGems to the latest version for security reasons. **
** If you need an older version, you can downgrade with 'gem update --system OLD_VERSION'. **

Updating rubygems-update
Fetching: rubygems-update-2.6.13.gem (100%)
Successfully installed rubygems-update-2.6.13
Installing RubyGems 2.6.13
RubyGems 2.6.13 installed

== Device Pairs ==
008867EE-00CB-4565-A18D-2CF26B44B3B8 (active, disconnected)
    Watch: Apple Watch - 38mm (F25D93AF-90E3-47E9-8476-FF2A6842B8C9) (Shutdown)
    Phone: iPhone 6 (06C2614B-FB3A-4CCB-8985-D1EB81FA72B3) (Shutdown)
E247E478-C5B3-4A27-A793-96088FFD37CC (active, disconnected)
    Watch: Apple Watch - 42mm (7BD59DE3-3934-4A3E-99CA-C91865B9660A) (Shutdown)
    Phone: iPhone 6 Plus (365C6809-B40B-4606-B909-E76A14776605) (Shutdown)
3CDDBEB2-443C-4F84-84B9-2775C927036F (active, disconnected)
    Watch: Apple Watch - 38mm (22B5BC0E-ACD6-490E-B95E-FB77ECCEE96A) (Shutdown)
    Phone: iPhone 6s (5752202B-E7A2-4B6C-9D7B-B211C2F54654) (Shutdown)
6ABB333A-C446-4106-9FD2-1C4DB8F7F4BC (active, disconnected)
    Watch: Apple Watch - 42mm (0A3CB7E9-68C8-4F70-B59A-D72374ECE4C9) (Shutdown)
    Phone: iPhone 6s Plus (989606C6-1BE4-425F-9497-43D9D37F0BCC) (Shutdown)
install
163.61s
$ npm install
npm WARN deprecated connect@2.30.2: connect 2.x series is deprecated

> fsevents@1.1.2 install /Users/travis/build/JakeKwon/4156-homework4/node_modules/fsevents
> node install

[fsevents] Success: "/Users/travis/build/JakeKwon/4156-homework4/node_modules/fsevents/lib/binding/Release/node-v48-darwin-x64/fse.node" already installed
Pass --update-binary to reinstall or --build-from-source to recompile
counter@0.1.0 /Users/travis/build/JakeKwon/4156-homework4

npm WARN react-native-gesture-handler@1.0.0-alpha.23 requires a peer of react@> 15.0.0 but none was installed.
npm WARN react-native-branch@2.0.0-beta.3 requires a peer of react@>=15.4.0 but none was installed.
npm WARN lottie-react-native@1.1.1 requires a peer of react@>=15.3.1 but none was installed.

0.01s
WARNING: Using Objective-C testing without specifying a scheme and either a workspace or a project is deprecated.

0.01s
  Check out our documentation for more information: http://about.travis-ci.org/docs/user/languages/objective-c/

  PASS  __tests__/unitTestings/homescreen_checkoutCart_test.js
   ● Console

     console.log __tests__/unitTestings/homescreen_checkoutCart_test.js:77
       2
     console.log __tests__/unitTestings/homescreen_checkoutCart_test.js:77
       0

  PASS  __tests__/index.ios.js
   ● Console

     console.error node_modules/react-native/Libraries/Core/ExceptionsManager.js:73
       Warning: PropTypes has been moved to a separate package. Accessing React.PropTypes is no longer supported and will be removed completely in React 16. Use the prop-types package on npm instead. (https://fb.me/migrating-from-react-proptypes)
     console.error node_modules/react-native/Libraries/Core/ExceptionsManager.js:73
       Warning: checkPropTypes has been moved to a separate package. Accessing React.checkPropTypes is no longer supported and will be removed completely in React 16. Use the prop-types package on npm instead. (https://fb.me/migrating-from-react-proptypes)
     console.error node_modules/react-native/Libraries/Core/ExceptionsManager.js:73
       Warning: React.createClass is no longer supported. Use a plain JavaScript class instead. If you're not yet ready to migrate, create-react-class is available on npm as a drop-in replacement. (https://fb.me/migrating-from-react-create-class)
     console.error node_modules/react-native/Libraries/Core/ExceptionsManager.js:73
       Warning: Failed prop type: The prop `onPress` is marked as required in `Button`, but its value is `undefined`.
           in Button (created by AcceptOrderScreen)
           in AcceptOrderScreen
     console.error node_modules/react-native/Libraries/Core/ExceptionsManager.js:73
       React caught an error thrown by CardStack. You should fix this error in your code. Consider adding an error boundary to your tree to customize error handling behavior.

       TypeError: Cannot read property 'Object.<anonymous>' of null

       The error is located at:
           in CardStack (created by Transitioner)
           in View (created by View)
           in View (created by Transitioner)
           in Transitioner (created by CardStackTransitioner)
           in CardStackTransitioner
           in Unknown (created by Navigator)
           in Navigator (created by NavigationContainer)
           in NavigationContainer (created by App)
           in App

       The error was thrown at:
           at Runtime._execModule (/Users/jordanlee/Documents/W4156/litbit/node_modules/jest-runtime/build/index.js:511:22),
           at Runtime.requireModule (/Users/jordanlee/Documents/W4156/litbit/node_modules/jest-runtime/build/index.js:329:14),
           at Runtime.requireModuleOrMock (/Users/jordanlee/Documents/W4156/litbit/node_modules/jest-runtime/build/index.js:405:19),
           at Object.get PanResponder [as PanResponder] (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-native/Libraries/react-native/react-native-implementation.js:88:27),
           at CardStack.render (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-navigation/src/views/CardStack/CardStack.js:449:2470),
           at finishClassComponent (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:4041:31),
           at updateClassComponent (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:4023:12),
           at beginWork (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:4432:16),
           at performUnitOfWork (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6030:16),
           at workLoop (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6159:26)
     console.error node_modules/react-native/Libraries/Core/ExceptionsManager.js:73
       TypeError: Cannot read property 'Object.<anonymous>' of null
           at Runtime._execModule (/Users/jordanlee/Documents/W4156/litbit/node_modules/jest-runtime/build/index.js:511:22)
           at Runtime.requireModule (/Users/jordanlee/Documents/W4156/litbit/node_modules/jest-runtime/build/index.js:329:14)
           at Runtime.requireModuleOrMock (/Users/jordanlee/Documents/W4156/litbit/node_modules/jest-runtime/build/index.js:405:19)
           at Object.get PanResponder [as PanResponder] (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-native/Libraries/react-native/react-native-implementation.js:88:27)
           at CardStack.render (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-navigation/src/views/CardStack/CardStack.js:449:2470)
           at finishClassComponent (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:4041:31)
           at updateClassComponent (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:4023:12)
           at beginWork (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:4432:16)
           at performUnitOfWork (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6030:16)
           at workLoop (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6159:26)

  PASS  __tests__/unitTestings/firebase_backend.js
   ● Console

     console.log __tests__/unitTestings/firebase_backend.js:56
       true
     console.log __tests__/unitTestings/firebase_backend.js:64
       true
     console.log __tests__/unitTestings/firebase_backend.js:121
       true

  PASS  __tests__/acceptorderscreen_test.js
   ● Console

     console.error node_modules/react-native/Libraries/Core/ExceptionsManager.js:73
       Warning: Failed prop type: The prop `onPress` is marked as required in `Button`, but its value is `undefined`.
           in Button (created by AcceptOrderScreen)
           in AcceptOrderScreen

  PASS  __tests__/app-test.js
   ● Console

     console.error node_modules/react-native/Libraries/Core/ExceptionsManager.js:73
       Warning: PropTypes has been moved to a separate package. Accessing React.PropTypes is no longer supported and will be removed completely in React 16. Use the prop-types package on npm instead. (https://fb.me/migrating-from-react-proptypes)
     console.error node_modules/react-native/Libraries/Core/ExceptionsManager.js:73
       Warning: checkPropTypes has been moved to a separate package. Accessing React.checkPropTypes is no longer supported and will be removed completely in React 16. Use the prop-types package on npm instead. (https://fb.me/migrating-from-react-proptypes)
     console.error node_modules/react-native/Libraries/Core/ExceptionsManager.js:73
       Warning: React.createClass is no longer supported. Use a plain JavaScript class instead. If you're not yet ready to migrate, create-react-class is available on npm as a drop-in replacement. (https://fb.me/migrating-from-react-create-class)
     console.error node_modules/react-native/Libraries/Core/ExceptionsManager.js:73
       React caught an error thrown by CardStack. You should fix this error in your code. Consider adding an error boundary to your tree to customize error handling behavior.

       TypeError: Cannot read property 'Object.<anonymous>' of null

       The error is located at:
           in CardStack (created by Transitioner)
           in View (created by View)
           in View (created by Transitioner)
           in Transitioner (created by CardStackTransitioner)
           in CardStackTransitioner
           in Unknown (created by Navigator)
           in Navigator (created by NavigationContainer)
           in NavigationContainer (created by App)
           in App

       The error was thrown at:
           at Runtime._execModule (/Users/jordanlee/Documents/W4156/litbit/node_modules/jest-runtime/build/index.js:511:22),
           at Runtime.requireModule (/Users/jordanlee/Documents/W4156/litbit/node_modules/jest-runtime/build/index.js:329:14),
           at Runtime.requireModuleOrMock (/Users/jordanlee/Documents/W4156/litbit/node_modules/jest-runtime/build/index.js:405:19),
           at Object.get PanResponder [as PanResponder] (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-native/Libraries/react-native/react-native-implementation.js:88:27),
           at CardStack.render (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-navigation/src/views/CardStack/CardStack.js:449:2470),
           at finishClassComponent (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:4041:31),
           at updateClassComponent (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:4023:12),
           at beginWork (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:4432:16),
           at performUnitOfWork (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6030:16),
           at workLoop (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6159:26)
     console.error node_modules/react-native/Libraries/Core/ExceptionsManager.js:73
       TypeError: Cannot read property 'Object.<anonymous>' of null
           at Runtime._execModule (/Users/jordanlee/Documents/W4156/litbit/node_modules/jest-runtime/build/index.js:511:22)
           at Runtime.requireModule (/Users/jordanlee/Documents/W4156/litbit/node_modules/jest-runtime/build/index.js:329:14)
           at Runtime.requireModuleOrMock (/Users/jordanlee/Documents/W4156/litbit/node_modules/jest-runtime/build/index.js:405:19)
           at Object.get PanResponder [as PanResponder] (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-native/Libraries/react-native/react-native-implementation.js:88:27)
           at CardStack.render (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-navigation/src/views/CardStack/CardStack.js:449:2470)
           at finishClassComponent (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:4041:31)
           at updateClassComponent (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:4023:12)
           at beginWork (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:4432:16)
           at performUnitOfWork (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6030:16)
           at workLoop (/Users/jordanlee/Documents/W4156/litbit/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:6159:26)

  PASS  __tests__/onboardingscreen_test.js
   ● Console

     console.error node_modules/react-native/Libraries/Core/ExceptionsManager.js:73
       Warning: Stateless function components cannot be given refs. Attempts to access this ref will fail.

       Check the render method of `PickerIOS`.
           in Unknown (created by PickerIOS)
           in View (created by View)
           in View (created by PickerIOS)
           in PickerIOS (created by Picker)
           in Picker (created by OnboardingScreen)
           in View (created by View)
           in View (created by OnboardingScreen)
           in OnboardingScreen

 Test Suites: 0 failed, 7 passed, 7 total
 Tests:       11 passed, 11 total
 Snapshots:   5 passed, 5 total
 Time:        0.699s, estimated 1s
 Ran all test suites.

The command "echo "  Check out our documentation for more information: http://about.travis-ci.org/docs/user/languages/objective-c/"" exited with 0.

Done. Your build exited with 0.
/Users/travis/.travis/job_stages: line 166: shell_session_update: command not found
