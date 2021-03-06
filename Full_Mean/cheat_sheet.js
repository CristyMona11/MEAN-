========================= CREATING A PAGE ===========================
=====================================================================
(ALWAYS)
- route CLIENT
- html partial CLIENT
    - toController:   ng-click="someControllerMethod()"
    - fromController: {{ item.text }}
    - 2-bind:         ng-model="item.text"
- controller CLIENT
    - toPartial: $scope.x = "thing"
    - fromPartial: $scope.y = function () {}
    - toFactory: someFactory.someFactoryMethod('hi', controllerCallback)
    - fromFactory: function controllerCallback (data) {  }
(IF NEEDS DATA)
- factory CLIENT
    - fromController: factory.someFactoryMethod(x, controllerCallback)
    - toController: controllerCallback('the data the controller wants')
    - toServer: $http.get('someurl').then(responseCallback)
    - fromServer: function responseCallback (response) {  }
(IF FACTORY DOESNT HAVE DATA)
- route SERVER
    - toController: app.post('/url', someController.someControllerMethod)
- controller SERVER
    - fromFactory:  request.params.someThing || request.body.someThing
    - toFactory: response.json(moreStuff)
    - toDatabase: Item.find({}, databaseCallback)
    - fromDatabase: function databaseCallback (err, items) {  }
- query database SERVER
=======================================================================
============================= I AM LOST   =============================
=======================================================================
BEFORE EVERYTHING
what am I even trying to do?
    reread instructions
    ask neighbor / instructor / slack
    draw on whiteboard
    conceptualize
    look through cheatsheet above ^
inspect element (look in console)
check your terminal
NOT MY CODE ERROR
if error is on line "12345:234 of whoknowswhatlibrary.js"
    read the whole thing.  including the stack trace (one of these files might look more like "24:24 of app.js")
    if you found the line
        proceed to MY CODE ERROR
    if you couldn''t find the line
        proceed to WEIRD BUGS
MY CODE ERROR
console log
    all data coming in (check that it looks like what it''s supposed to)
    all data going out (check that it looks like what it''s supposed to)
syntax errors
cannot find / not a function
    where is the first time (or most recent time) that variable is defined
WEIRD BUGS
copy error (if any) into google
ask a neighbor / instructor / slack
look back at old, working examples of yours/on platform
CHECK HABITS
plural v singular
caps v non-caps
