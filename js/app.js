

var app = angular.module('wsu', ['pascalprecht.translate'])





app.config(function ($translateProvider, $windowProvider) {
  $translateProvider.translations('en', {
    // APP_TITLE: 'Hello',
    'WSU Schedule'        : 'Woosong Schedule Creator',
    "class selection"     : "Classes",
    "button hide"         : "hide",
    "button show"         : "show",
    "button delete"       : "delete",
    "add class"           : "Create class",
    "add class button"    : "+ Create",
    "new class name"      : "Class name",
    "new class professor" : "Class professor",
    "new class start"     : "start",
    "new class end"       : "end",
    "mon"                 : "mon",
    "tue"                 : "tue",
    "wed"                 : "wed",
    "thu"                 : "thu",
    "fri"                 : "fri",
    "sat"                 : "sat",
    "sun"                 : "sun",
    "clear calendar"      : "CLEAR EVERYTHING",
    "footer 1"            : "Built with love by a WSU Student",
    "footer 2"            : "All rights reserved. Copyright © 2021. SableApps.",
    "footer 3"            : "&copy; 2021 SableApps - online schedule markup. All Rights Reserved.",

  });
  $translateProvider.translations('kr', {
    'WSU Schedule'        : '우송 스케줄 생성기',
    "class selection"     : "수업",
    "button hide"         : "숨다",
    "button show"         : "보여주다",
    "button delete"       : "삭제하다",
    "add class"           : "수업 만들기",
    "add class button"    : "+ 만듭니다",
    "new class name"      : "학급명",
    "new class professor" : "반 교수",
    "new class start"     : "시간 시작",
    "new class end"       : "시간이 끝나다",
    "mon"                 : "월",
    "tue"                 : "화",
    "wed"                 : "수",
    "thu"                 : "목",
    "fri"                 : "금",
    "sat"                 : "토",
    "sun"                 : "일",
    "clear calendar"      : "모든 항목 지우기",
    "footer 1"            : "WSU 학생에 의해 사랑으로 지어지다",
    "footer 2"            : "모든 권리 보유. 저작권 © 2021. 세이블앱.",
    "footer 3"            : "2021년 SableApps - 온라인 일정 마크업. 모든 권한이 예약되었습니다.",
  });
  $translateProvider.translations('jp', {
    'WSU Schedule'        : 'Woosongスケジュールクリエーター',
    "class selection"     : "クラス",
    "button hide"         : "隠れる",
    "button show"         : "見せる",
    "button delete"       : "消去",
    "add class"           : "クラスを作成する",
    "add class button"    : "+作成",
    "new class name"      : "クラス名",
    "new class professor" : "クラス教授",
    "new class start"     : "始める",
    "new class end"       : "終わり",
    "mon"                 : "月",
    "tue"                 : "火",
    "wed"                 : "水",
    "thu"                 : "木",
    "fri"                 : "金",
    "sat"                 : "土",
    "sun"                 : "日",
    "clear calendar"      : "すべてをクリアする",
    "footer 1"            : "WSUの学生によって愛を込めて建てられました",
    "footer 2"            : "全著作権所有. Copyright©2021.SableApps.",
    "footer 3"            : "2021SableApps-オンラインスケジュールマークアップ. 全著作権所有.",

  });
  $translateProvider.translations('zh', {
    'WSU Schedule'        : '吴松日程创建者',
    "class selection"     : "班级",
    "button hide"         : "隐藏",
    "button show"         : "展示",
    "button delete"       : "删除",
    "add class"           : "创建类",
    "add class button"    : "+ 创建",
    "new class name"      : "班级名称",
    "new class professor" : "班主任",
    "new class start"     : "开始",
    "new class end"       : "结尾",
    "mon"                 : "周一",
    "tue"                 : "周二",
    "wed"                 : "星期三",
    "thu"                 : "星期四",
    "fri"                 : "星期五",
    "sat"                 : "星期六",
    "sun"                 : "星期日",
    "clear calendar"      : "清除一切",
    "footer 1"            : "由 WSU 学生用爱建造",
    "footer 2"            : "版权所有. 版权所有 © 2021.SableApps.",
    "footer 3"            : "2021 SableApps - 在线日程标记. 版权所有.",
  });
  $translateProvider.translations('ru', {
    'WSU Schedule'        : 'Создатель расписания Woosong',
    "class selection"     : "Классы",
    "button hide"         : "Спрятать",
    "button show"         : "Показать",
    "button delete"       : "удалять",
    "add class"           : "Создать класс",
    "add class button"    : "+ Создать",
    "new class name"      : "Название класса",
    "new class professor" : "Классный профессор",
    "new class start"     : "Начните",
    "new class end"       : "конец",
    "mon"                 : "понедельник",
    "tue"                 : "вторник",
    "wed"                 : "среда",
    "thu"                 : "четверг",
    "fri"                 : "Пятница",
    "sat"                 : "суббота",
    "sun"                 : "Воскресенье",
    "clear calendar"      : "ОЧИСТИТЬ ВСЁ",
    "footer 1"            : "Создан с любовью студентом WSU",
    "footer 2"            : "Все права защищены. Авторские права © 2021. SableApps.",
    "footer 3"            : "2021 SableApps - онлайн-разметка расписания. Все права защищены.",
  });
  $translateProvider.translations('uz', {
    'WSU Schedule'        : 'Woosong jadvalini yaratuvchisi',
    "class selection"     : "Sinflar",
    "button hide"         : "yashirmoq",
    "button show"         : "ko'rsatish",
    "button delete"       : "o'chirish",
    "add class"           : "Sinf yarating",
    "add class button"    : "+ Yaratish",
    "new class name"      : "Sinf nomi",
    "new class professor" : "Sinf professori",
    "new class start"     : "boshlash",
    "new class end"       : "oxiri",
    "mon"                 : "du",
    "tue"                 : "se",
    "wed"                 : "chor",
    "thu"                 : "pay",
    "fri"                 : "juma",
    "sat"                 : "shanba",
    "sun"                 : "yak",
    "clear calendar"      : "HAMMANI TOZIB OLISH",
    "footer 1"            : "WSU talabasi tomonidan sevgi bilan qurilgan",
    "footer 2"            : "Barcha huquqlar himoyalangan. Mualliflik huquqi © 2021. SableApps.",
    "footer 3"            : "2021 SableApps - onlayn jadvalni belgilash. Barcha huquqlar himoyalangan.",
  });

// en
// kr
// jp
// zh
// ru
// uz

  try {
    var $window = $windowProvider.$get();
    var lan_code = $window.localStorage.getItem('lan');
    $translateProvider.preferredLanguage(lan_code);

  } catch (e) {
    console.log(e);
    $translateProvider.preferredLanguage('en');
  }

});







































































var day_week_names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']



app.controller('mainController', ['$scope', '$window', '$translate', mainController]);

function mainController($scope, $window, $translate) {

  // default values for time selection of new class
  $scope.new_class_time__start_hour     = 9
  $scope.new_class_time__start_minute   = 0
  $scope.new_class_time__end_hour       = 12
  $scope.new_class_time__end_minute     = 0

  $scope.new_class__day_of_week__monday       = true
  $scope.new_class__day_of_week__tuesday      = false
  $scope.new_class__day_of_week__wednesday    = true
  $scope.new_class__day_of_week__thursday     = false
  $scope.new_class__day_of_week__friday       = false
  $scope.new_class__day_of_week__saturday     = false
  $scope.new_class__day_of_week__sunday       = false

  // all the classes
  $scope.classes =
    [
      {
        id: Math.floor(Math.random() * 10001),
        show_in_schedule: true,
        name: 'Example Class 1',          //
        // professor: 'Eric Jones',     //
        days_of_week: [1,0,0,0,0,0,0],
        time_start: ['9', '0'], //
        time_end: ['12', '0'],   //
        bgColor: '#c0f3ff',
        borderColor: '#2cabdc'
        // category: '',      // Major/minor/ge...
      },
      {
        id: Math.floor(Math.random() * 10001),
        show_in_schedule: true,
        name: 'Example Class 2',          //
        // professor: 'Eric Jones',     //
        days_of_week: [0,1,0,1,0,0,0],
        time_start: ['11', '0'], //
        time_end: ['13', '0'],   //
        bgColor: '#ffb9b9',
        borderColor: '#da5858'
        // category: '',      // Major/minor/ge...
      },
      {
        id: Math.floor(Math.random() * 10001),
        show_in_schedule: false,
        name: 'Example Class 3',          //
        // professor: 'Eric Jones',     //
        days_of_week: [0,0,1,0,0,0,0],
        time_start: ['9', '0'], //
        time_end: ['12', '0'],   //
        bgColor: '#f3c5ff',
        borderColor: '#a258da'
        // category: '',      // Major/minor/ge...
      },

    ]

  $scope.move_class_order = function (i) {

    // move class to the front of the array
    //https://stackoverflow.com/questions/5306680/move-an-array-element-from-one-array-position-to-another?rq=1
    var element = $scope.classes[i];
    $scope.classes.splice(i, 1);
    $scope.classes.splice(0, 0, element);

  }

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
            bgColor:      _class.bgColor,
            bColor:      _class.bColor,
            // category: _class.category,      // Major/minor/ge...
          }


          var schedule = {
                calendarId: '1',
                title: new_class.name,
                category: 'time',
                color: '#252525a6',
                bgColor: new_class.bgColor,
                borderColor: new_class.bColor
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
      50
    );

  }

  $scope.show_class = function (id, event) {

    // only certain elements triggering 'ng-click' can trigger this function
    if (event){
      var allowed_targets = ['post-thumbnail-entry class-card', 'col', 'row', 'post-thumbnail-content']
      if (allowed_targets.some(v => event.target.className.includes(v))) {}
      else
        return
    }


    $scope.classes.forEach((_class, i) => {
      if(_class.id == id){
        if(_class.show_in_schedule == true) // if this class is already 'show', then toggle to hide
          _class.show_in_schedule = false
        else
          _class.show_in_schedule = true
      }
    });

    $scope.save_classes()

    $scope.populate_calendar();
  }

  $scope.hide_class = function (id) {
    $scope.classes.forEach((_class, i) => {
      if(_class.id == id){
        _class.show_in_schedule = false
      }
    });

    $scope.save_classes()

    $scope.populate_calendar()

  }

  $scope.create_class = function () {

    console.log($scope.classes);

    var new_class =
    {
      id:           Math.floor(Math.random() * 10001),
      show_in_schedule: true,
      name:         $scope.new_class__name,          //
      // professor:    $scope.new_class__professor,     //
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
      // category:     $scope.new_class__category,      // Major/minor/ge...
      bgColor:      '#c0f3ff',
      bColor:       '#2cabdc'
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

    $scope.save_classes()

  }

  $scope.delete_class = function (id) {

    if (!confirm("are you sure you want to delete this class?") )
      return

    $scope.classes = $scope.classes.filter(aClass => aClass.id !== id)

    $scope.save_classes()

    $scope.populate_calendar()
  }

  $scope.clear_classes = function () {
    if ( confirm('Are you sure you want to clear and delete all your classes?') ){
      $scope.classes = []
      $scope.save_classes()
      $scope.populate_calendar()
    }
  }

  $scope.update_schedule_time = function (id, date_start, date_end, date_old_start, date_old_end) {
    $scope.classes.forEach((_class, i) => {
      if(_class.id == id){

        // ======  change time  ======
        _class.time_start = [date_start.toDate().getHours(), date_start.toDate().getMinutes() ]
        _class.time_end = [date_end.toDate().getHours(), date_end.toDate().getMinutes() ]

        // ======  change day of week  ======
        var old_day_of_week = date_old_start.toDate().getDay() // return 0 - sun. 6 - sat
        old_day_of_week = old_day_of_week < 0 ? 7 : old_day_of_week - 1 // change to 0 - monday. 6 sunday

        var new_day_of_week = date_start.toDate().getDay() // return 0 - sun. 6 - sat
        new_day_of_week = new_day_of_week < 0 ? 7 : new_day_of_week - 1 // change to 0 - monday. 6 sunday

        _class.days_of_week[old_day_of_week] = 0
        _class.days_of_week[new_day_of_week] = 1
      }
    });

    $scope.save_classes()
    $scope.populate_calendar()
  }

  $scope.load_classes = function () {
    var class_json = $window.localStorage.getItem('classes')

    if (class_json == null || class_json == "" || class_json == "[]"){}
    else
      $scope.classes = JSON.parse(class_json)
  }

  $scope.save_classes = function () {

    var class_json = JSON.stringify($scope.classes)
    $window.localStorage.setItem('classes', class_json)

    console.log($window.localStorage.getItem('classes'));
  }

  $scope.load_classes()

  $scope.populate_calendar()

  // $window.localStorage.setItem('classes', '[]')

  $scope.changeLanguage = function (lan_code) {
    $translate.use(lan_code);
    $window.localStorage.setItem('lan', lan_code)

    set_calendar_week_day_names()

    calendar.setOptions({
                template:{
                  weekDayname: function (day) {
                    return window.day_week_names[day.day]
                  }
                }
              });
  };


  function set_calendar_week_day_names(lan_code) {
    if (!lan_code)
      var lan_code = $window.localStorage.getItem('lan');

    if (lan_code == 'en')
      day_week_names = ['Sun', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Mon']
    else if (lan_code == 'kr')
      day_week_names = ['일', '화', '수', '목', '금', '토', '월']
    else if (lan_code == 'jp')
      day_week_names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    else if (lan_code == 'zh')
      day_week_names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    else if (lan_code == 'ru')
      day_week_names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    else if (lan_code == 'uz')
      day_week_names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    // en
    // kr
    // jp
    // zh
    // ru
    // uz

  }
  set_calendar_week_day_names()

}



var defaultScheduleColor = '#c0f3ff'



// ============  CREATE CALENDAR  ============
var Calendar = tui.Calendar;
var calendar = new Calendar('#calendar', {

  id: 1,

  defaultView: 'week', // weekly view option
  usageStatistics: false,

  taskView: false,    // Can be also ['milestone', 'task']
  scheduleView: true,  // Can be also ['allday', 'time']

  disableClick: true,

  template: {
      weekDayname: function (day) {
        // day = {day: 0, dayName: 'Sun', isToday: false, date: 20, left: 0, …}
        // return day.dayName;
        return day_week_names[day.day]
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
      alldayTitle: function() {
          return '';
      },
      // time: function(schedule) {
      //     console.log({schedule});
      //     return schedule.title + ' <i class="fa fa-refresh"></i>' + schedule.start;
      // }

      // timezoneDisplayLabel: function(timezoneOffset, displayLabel) {
      //   var gmt, hour, minutes;
      //
      //   if (!displayLabel) {
      //     gmt = timezoneOffset < 0 ? '-' : '+';
      //     hour = Math.abs(parseInt(timezoneOffset / 60, 10));
      //     minutes = Math.abs(timezoneOffset % 60);
      //     displayLabel = gmt + getPadStart(hour) + ':' + getPadStart(minutes);
      //   }
      //   return displayLabel;
      // },
      timegridDisplayPrimayTime: function(time) {
        /* will be deprecated. use 'timegridDisplayPrimaryTime' */
        var hour = time.hour;
        return hour + ':00'
      },
      timegridDisplayPrimaryTime: function(time) {
        var hour = time.hour;
        return hour + ':00'
      },

  },

  week: {
      daynames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      startDayOfWeek: 1,
      narrowWeekend: true,
      hourStart: 7,
      hourEnd: 22,
  }
});

calendar.setCalendarColor('1', {
    // color: '#e8e8e8',
    bgColor: '#c0f3ff',
    borderColor: '#2cabdc',
    dragBgColor: '#5d94bb',
});


var mainCtrlScope = null
setTimeout(()=> mainCtrlScope = angular.element(document.getElementById('body')).scope(), 1000)



// ============  EVENTS  ============
calendar.on('beforeUpdateSchedule', function(event) {
    var schedule = event.schedule;
    var changes = event.changes;
    console.log(event);

    mainCtrlScope.update_schedule_time(event.schedule.id, event.start, event.end, schedule.start, schedule.end)

    calendar.updateSchedule(schedule.id, schedule.calendarId, changes);
});

calendar.on('clickSchedule', function(event) {

      // calendar.deleteSchedule(event.schedule.id, 1, true)
      // calendar.render(true);

      calendar.clear();

      setTimeout(()=> {

        // mainCtrlScope.hide_class(event.schedule.id)
        mainCtrlScope.hide_class(event.schedule.id)
        mainCtrlScope.populate_calendar()

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



