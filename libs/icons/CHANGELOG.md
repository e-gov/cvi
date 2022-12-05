# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

# [2.3.0](https://stash.ria.ee/scm/sun/veera-components/compare/icons-2.2.0...icons-2.3.0) (2022-12-05)


### Features

* reorderable list | STPA-220 | EBS-114 ([359bedb](https://stash.ria.ee/scm/sun/veera-components/commits/359bedb1c3e599e2578616e6806ceca3554e488f))



# [2.2.0](https://stash.ria.ee/scm/sun/veera-components/compare/icons-2.1.0...icons-2.2.0) (2022-11-10)


### Features

* open_in_new icon scaling support STPA-204 ([e17a4ea](https://stash.ria.ee/scm/sun/veera-components/commits/e17a4ea0ff6f11badea1ee8cfe470ad0810c567f))



# [2.1.0](https://stash.ria.ee/scm/sun/veera-components/compare/icons-2.0.0...icons-2.1.0) (2022-11-10)


### Features

* new icon for actions block button EBS-77 ([d959355](https://stash.ria.ee/scm/sun/veera-components/commits/d9593552a19bb344ca648d14d5bc6403124a219d))



# [2.0.0](https://stash.ria.ee/scm/sun/veera-components/compare/icons-1.2.0...icons-2.0.0) (2022-11-10)


### Features

* scale svgs (Pull request [#109](https://stash.ria.ee/scm/sun/veera-components/issues/109)) ([497fd59](https://stash.ria.ee/scm/sun/veera-components/commits/497fd593ba7a4580eb2919bfc8b7cbc96ef7c47d))


### BREAKING CHANGES

* labeled-icon, notification



# [1.2.0](https://stash.ria.ee/scm/sun/veera-components/compare/icons-1.1.0...icons-1.2.0) (2022-11-07)


### Features

* toasts ([d91044b](https://stash.ria.ee/scm/sun/veera-components/commits/d91044bfbe526e6df2c966b6c5d76c870dde147e))



# [1.1.0](https://stash.ria.ee/scm/sun/veera-components/compare/icons-1.0.0...icons-1.1.0) (2022-10-10)


### Features

* add select component ([75eea1b](https://stash.ria.ee/scm/sun/veera-components/commits/75eea1b08cf4181315956b6904a04d8bcee3f9b2))



# [1.0.0](https://stash.ria.ee/scm/sun/veera-components/compare/icons-0.2.1...icons-1.0.0) (2022-09-27)


### Features

* notification changes (Pull request [#59](https://stash.ria.ee/scm/sun/veera-components/issues/59)) ([aba9f51](https://stash.ria.ee/scm/sun/veera-components/commits/aba9f5163d9e634b5bffdc73a808042955728946))


### BREAKING CHANGES

* type -> severity

Merge in SUN/veera-components from fix-compact-notification to master

Squashed commit of the following:

commit 6225e0a0f66f4981368cc1f3a614cbc29aede2e3
Merge: 16d0784 509cd81
Author: Sarah Marion Mikk <SarahMarion.Mikk@nortal.com>
Date:   Mon Sep 26 16:04:36 2022 +0300

    Merge branch 'master' into fix-compact-notification

    # Conflicts:
    #	libs/ui/src/lib/icons/labeled-icon/labeled-icon.component.html
    #	libs/ui/src/lib/notification/notification.html.stories.ts

commit 16d0784aed6dc4ee4729ec8fc903e67a07aa18ef
Author: Sarah Marion Mikk <SarahMarion.Mikk@nortal.com>
Date:   Mon Sep 26 16:00:33 2022 +0300

    refactor: lint

commit 64fe3a502bdb2a4493a6983d0b1826dec84ced37
Author: Sarah Marion Mikk <SarahMarion.Mikk@nortal.com>
Date:   Mon Sep 26 16:00:07 2022 +0300

    chore: icon for compact notification

commit a6991d4dbdcce665e4b0d3381a2775709e6ee9cb
Merge: 6d22672 0eba6f0
Author: Sarah Marion Mikk <SarahMarion.Mikk@nortal.com>
Date:   Mon Sep 26 14:37:07 2022 +0300

    Merge branch 'master' into fix-compact-notification

commit 6d22672618af3d8312aa713e177319f2b6fa69a1
Author: Aleksandr Beliaev <aleksandr.beliaev@nortal.com>
Date:   Fri Sep 23 20:46:53 2022 +0300

    refactor: Renamed type input of Notification component to severity and moved compact value to a separate input

commit 93bf9d3ea9bb4a92a5a0600785714021d86d346e
Author: Aleksandr Beliaev <aleksandr.beliaev@nortal.com>
Date:   Fri Sep 23 20:40:38 2022 +0300

    fix: replaced a font size in pixels in notification Sass component with a Veera variable

commit 4c97d7d3977b5e499b1560ee3fe1d5609de25e10
Author: Aleksandr Beliaev <aleksandr.beliaev@nortal.com>
Date:   Fri Sep 23 20:18:07 2022 +0300

    refactor: Renamed header input to title in Notification component to reflect better what it does

commit 18637fb54d46e01214ef1669b660d7f3d06f1ace
Author: Aleksandr Beliaev <aleksandr.beliaev@nortal.com>
Date:   Fri Sep 23 20:12:52 2022 +0300

    refactor: Refactored Notification component styles for better clarity and class consistency, simplified DOM structure, cleaned close, info and lightbulb SVG icons to allow for recoloring

commit 044b725afabc323444bef18c8ed55efa8bd84fca
Author: Aleksandr Beliaev <aleksandr.beliaev@nortal.com>
Date:   Fri Sep 23 19:58:22 2022 +0300

    fix: removed hardcoded size style from Icon Angular component

commit 39a29f2e5a987f9078527e0ee411c0453504422a
Author: Sarah Marion Mikk <SarahMarion.Mikk@nortal.com>
Date:   Fri Sep 23 13:42:23 2022 +0300

    fix: compact notifications with icon



## [0.2.1](https://stash.ria.ee/scm/sun/veera-components/compare/icons-0.2.0...icons-0.2.1) (2022-09-22)


### Bug Fixes

* **icons:** publishing ([b90c71a](https://stash.ria.ee/scm/sun/veera-components/commits/b90c71a0b3b6b92db6cf90300ad403b296976b6a))



# [0.2.0](https://stash.ria.ee/scm/sun/veera-components/compare/icons-0.1.0...icons-0.2.0) (2022-09-22)


### Bug Fixes

* icons & styles versioning ([8f43144](https://stash.ria.ee/scm/sun/veera-components/commits/8f43144b5f82f70cd2ff63b81d04d544dcb9c037))
* steps visuals ([d1c6c1c](https://stash.ria.ee/scm/sun/veera-components/commits/d1c6c1cd1e126962d2e030b78713f032b4eb206c))
* tags ([20aa0cf](https://stash.ria.ee/scm/sun/veera-components/commits/20aa0cf459dbb5f5ca1ce92879830a014e60c9f9))


### Features

* icons library ([e5326f2](https://stash.ria.ee/scm/sun/veera-components/commits/e5326f2fe4d93e5b2b14cd9f53a61767f8398208))



## [0.1.1](https://bitbucket.ria.ee/scm/sun/veera-components/compare/icons-0.1.0...icons-0.1.1) (2022-09-21)


### Bug Fixes

* icons & styles versioning ([8f43144](https://bitbucket.ria.ee/scm/sun/veera-components/commits/8f43144b5f82f70cd2ff63b81d04d544dcb9c037))
