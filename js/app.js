

angular.module('wsu', []).controller('mainController', mainController);


function mainController($scope) {

  $scope.new_class_time__start_hour     = 9
  $scope.new_class_time__start_minute   = 0
  $scope.new_class_time__end_hour       = 12
  $scope.new_class_time__end_minute     = 0


  $scope.foo = 'boo'
  $scope.classes =
    [{
      id: Math.floor(Math.random() * 10001),
      show_in_schedule: true,
      name:'Test',          //
      professor:'Eric',     //
      days_of_week: [1,0,0,1,0,0,0],
      time_start: ['9', '0'], //
      time_end: ['12', '0'],   //
      category:'GE',      // Major/minor/ge...

    }]



  $scope.populate_calendar = function (){

    calendar.clear(true)

    setTimeout(
      ()=>{
        $scope.classes.forEach((_class, i) => {

          if(_class.show_in_schedule == false)
            return


          var new_class =
          {
            id:           _class.id,
            name:         _class.name,          //
            professor:    _class.professor,     //
            days_of_week: _class.days_of_week,
            time_start:   _class.time_start,
            time_end:     _class.time_end,
            // category: _class.category,      // Major/minor/ge...
          }


          var schedule = {
                calendarId: '1',
                title: new_class.name,
                category: 'time',
            }

          if(new_class.days_of_week[0] == 1){
            schedule.id     = new_class.id
            schedule.start  = new Date(2091, 0, 1, new_class.time_start[0], new_class.time_start[1], 0, 0)
            schedule.end    = new Date(2091, 0, 1, new_class.time_end[0], new_class.time_end[1], 0, 0)
            calendar.createSchedules([schedule])
          }
          if(new_class.days_of_week[1] == 1){
            schedule.id     = new_class.id
            schedule.start  = new Date(2091, 0, 2, new_class.time_start[0], new_class.time_start[1], 0, 0)
            schedule.end    = new Date(2091, 0, 2, new_class.time_end[0], new_class.time_end[1], 0, 0)
            calendar.createSchedules([schedule])
          }
          if(new_class.days_of_week[2] == 1){
            schedule.id     = new_class.id
            schedule.start  = new Date(2091, 0, 3, new_class.time_start[0], new_class.time_start[1], 0, 0)
            schedule.end    = new Date(2091, 0, 3, new_class.time_end[0], new_class.time_end[1], 0, 0)
            calendar.createSchedules([schedule])
          }
          if(new_class.days_of_week[3] == 1){
            schedule.id     = new_class.id
            schedule.start  = new Date(2091, 0, 4, new_class.time_start[0], new_class.time_start[1], 0, 0)
            schedule.end    = new Date(2091, 0, 4, new_class.time_end[0], new_class.time_end[1], 0, 0)
            calendar.createSchedules([schedule])
          }
          if(new_class.days_of_week[4] == 1){
            schedule.id     = new_class.id
            schedule.start  = new Date(2091, 0, 5, new_class.time_start[0], new_class.time_start[1], 0, 0)
            schedule.end    = new Date(2091, 0, 5, new_class.time_end[0], new_class.time_end[1], 0, 0)
            calendar.createSchedules([schedule])
          }
          if(new_class.days_of_week[5] == 1){
            schedule.id     = new_class.id
            schedule.start  = new Date(2091, 0, 6, new_class.time_start[0], new_class.time_start[1], 0, 0)
            schedule.end    = new Date(2091, 0, 6, new_class.time_end[0], new_class.time_end[1], 0, 0)
            calendar.createSchedules([schedule])
          }
          if(new_class.days_of_week[6] == 1){
            schedule.id     = new_class.id
            schedule.start  = new Date(2091, 0, 7, new_class.time_start[0], new_class.time_start[1], 0, 0)
            schedule.end    = new Date(2091, 0, 7, new_class.time_end[0], new_class.time_end[1], 0, 0)
            calendar.createSchedules([schedule])
          }

        });
      },
      200
    );

  }

  $scope.show_class = function (id) {
    console.log({id});
    $scope.classes.forEach((_class, i) => {
      if(_class.id == id){
        console.log('$scope.show_class = function (id) {...}');
        _class.show_in_schedule = true
      }
    });

    $scope.populate_calendar();
  }

  $scope.hide_class = function (id) {
    $scope.classes.forEach((_class, i) => {
      if(_class.id == id){
        _class.show_in_schedule = false
      }
    });
  }

  $scope.create_class = function () {

    console.log($scope.classes);

    var new_class =
    {
      id:           Math.floor(Math.random() * 10001),
      show_in_schedule: true,
      name:         $scope.new_class__name,          //
      professor:    $scope.new_class__professor,     //
      days_of_week: [
        $scope.new_class__day_of_week__monday ? 1 : 0,
        $scope.new_class__day_of_week__tuesday ? 1 : 0,
        $scope.new_class__day_of_week__wednesday ? 1 : 0,
        $scope.new_class__day_of_week__thursday ? 1 : 0,
        $scope.new_class__day_of_week__friday ? 1 : 0,
        $scope.new_class__day_of_week__saturday ? 1 : 0,
        $scope.new_class__day_of_week__sunday ? 1 : 0,
      ],  // 6 = sunday, 0 = monday, 5 = saturday
      time_start:   [$scope.new_class_time__start_hour, $scope.new_class_time__start_minute],
      time_end:     [$scope.new_class_time__end_hour, $scope.new_class_time__end_minute],
      category:     $scope.new_class__category,      // Major/minor/ge...
    }

    $scope.classes.push(new_class)


    var schedule = {
          calendarId: '1',
          title: new_class.name,
          category: 'time',
      }

    if($scope.new_class__day_of_week__monday){
      schedule.id = new_class.id,
      schedule.start  = new Date(2091, 0, 1, new_class.time_start[0], new_class.time_start[1], 0, 0)
      schedule.end    = new Date(2091, 0, 1, new_class.time_end[0], new_class.time_end[1], 0, 0)
      calendar.createSchedules([schedule])
    }
    if($scope.new_class__day_of_week__tuesday){
      schedule.id = new_class.id,
      schedule.start  = new Date(2091, 0, 2, new_class.time_start[0], new_class.time_start[1], 0, 0)
      schedule.end    = new Date(2091, 0, 2, new_class.time_end[0], new_class.time_end[1], 0, 0)
      calendar.createSchedules([schedule])
    }
    if($scope.new_class__day_of_week__wednesday){
      schedule.id = new_class.id,
      schedule.start  = new Date(2091, 0, 3, new_class.time_start[0], new_class.time_start[1], 0, 0)
      schedule.end    = new Date(2091, 0, 3, new_class.time_end[0], new_class.time_end[1], 0, 0)
      calendar.createSchedules([schedule])
    }
    if($scope.new_class__day_of_week__thursday){
      schedule.id = new_class.id,
      schedule.start  = new Date(2091, 0, 4, new_class.time_start[0], new_class.time_start[1], 0, 0)
      schedule.end    = new Date(2091, 0, 4, new_class.time_end[0], new_class.time_end[1], 0, 0)
      calendar.createSchedules([schedule])
    }
    if($scope.new_class__day_of_week__friday){
      schedule.id = new_class.id,
      schedule.start  = new Date(2091, 0, 5, new_class.time_start[0], new_class.time_start[1], 0, 0)
      schedule.end    = new Date(2091, 0, 5, new_class.time_end[0], new_class.time_end[1], 0, 0)
      calendar.createSchedules([schedule])
    }
    if($scope.new_class__day_of_week__saturday){
      schedule.id = new_class.id,
      schedule.start  = new Date(2091, 0, 6, new_class.time_start[0], new_class.time_start[1], 0, 0)
      schedule.end    = new Date(2091, 0, 6, new_class.time_end[0], new_class.time_end[1], 0, 0)
      calendar.createSchedules([schedule])
    }
    if($scope.new_class__day_of_week__sunday){
      schedule.id = new_class.id,
      schedule.start  = new Date(2091, 0, 7, new_class.time_start[0], new_class.time_start[1], 0, 0)
      schedule.end    = new Date(2091, 0, 7, new_class.time_end[0], new_class.time_end[1], 0, 0)
      calendar.createSchedules([schedule])
    }



  }

  $scope.delete_class = function (id) {
    $scope.classes = $scope.classes.filter(aClass => aClass.id !== id)

    $scope.populate_calendar()
  }


  $scope.populate_calendar()
}





// ============  CREATE CALENDAR  ============
var Calendar = tui.Calendar;
var calendar = new Calendar('#calendar', {

  id: 1,

  defaultView: 'week', // weekly view option
  usageStatistics: false,

  taskView: false,    // Can be also ['milestone', 'task']
  scheduleView: true,  // Can be also ['allday', 'time']

  template: {
      weekDayname: function (day) {
        // day = {day: 0, dayName: 'Sun', isToday: false, date: 20, left: 0, …}
        return day.dayName;
      },
      // milestone: function(schedule) {
      //     return '<span style="color:red;"><i class="fa fa-flag"></i> ' + schedule.title + '</span>';
      // },
      // milestoneTitle: function() {
      //     return 'Milestone';
      // },
      // task: function(schedule) {
      //     return '&nbsp;&nbsp;#' + schedule.title;
      // },
      // taskTitle: function() {
      //     return '<label><input type="checkbox" />Task</label>';
      // },
      // allday: function(schedule) {
      //     return schedule.title + ' <i class="fa fa-refresh"></i>';
      // },
      // alldayTitle: function() {
      //     return 'All Day';
      // },
      // time: function(schedule) {
      //     return schedule.title + ' <i class="fa fa-refresh"></i>' + schedule.start;
      // }
  },

  week: {
      daynames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      startDayOfWeek: 1,
      narrowWeekend: true,
      hourStart: 7,
      hourEnd: 22,
  }
});





// ============  EVENTS  ============
calendar.on('beforeUpdateSchedule', function(event) {
    var schedule = event.schedule;
    var changes = event.changes;

    calendar.updateSchedule(schedule.id, schedule.calendarId, changes);
});

calendar.on('clickSchedule', function(event) {

      // calendar.deleteSchedule(event.schedule.id, 1, true)
      // calendar.render(true);

      calendar.clear();

      setTimeout(()=> {

        var $scope = angular.element(document.getElementById('body')).scope()

        // $scope.hide_class(event.schedule.id)
        $scope.hide_class(event.schedule.id)
        $scope.populate_calendar()

      }, 1000);


});

// SET CALENDAR DATE TO THE FUTURE
var calendarBaseDate = new Date(2091, 0, 1, 0,0,0,0) // 2091, jan 1st, 00:00:00:000 - which is a Monday (try 2096 for 1st = Sunday)
calendar.setDate(calendarBaseDate);







// TESTING
// var start = new Date(2091, 0, 1, 9, 0, 0, 0)
// var end = new Date(2091, 0, 1, 13, 0, 0, 0)
// calendar.createSchedules([
//     {
//         id: '1',
//         calendarId: '1',
//         title: 'my schedule',
//         category: 'time',
//         dueDateClass: '',
//         start: start.toISOString(),
//         end: end.toISOString(),
//     },
// ]);
//
// calendar.deleteSchedule(1, 1)
// // calendar.createSchedules(schedules, silent);
// calendar.render();