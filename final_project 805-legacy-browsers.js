/************************** 
 * Final_Project 805 *
 **************************/


// store info about the experiment session:
let expName = 'final_project 805';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0.0, 0.0, 0.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'contain',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const trial1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trial1LoopBegin(trial1LoopScheduler));
flowScheduler.add(trial1LoopScheduler);
flowScheduler.add(trial1LoopEnd);


flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Index chart.xlsx', 'path': 'Index chart.xlsx'},
    {'name': 'picture1/P1-1.png', 'path': 'picture1/P1-1.png'},
    {'name': 'picture2/P2-1.png', 'path': 'picture2/P2-1.png'},
    {'name': 'sound/01_S3T1.wav', 'path': 'sound/01_S3T1.wav'},
    {'name': 'picture1/P1-2.png', 'path': 'picture1/P1-2.png'},
    {'name': 'picture2/P2-2.png', 'path': 'picture2/P2-2.png'},
    {'name': 'sound/02_S2T1.wav', 'path': 'sound/02_S2T1.wav'},
    {'name': 'picture1/P1-3.png', 'path': 'picture1/P1-3.png'},
    {'name': 'picture2/P2-3.png', 'path': 'picture2/P2-3.png'},
    {'name': 'sound/03_S3T1.wav', 'path': 'sound/03_S3T1.wav'},
    {'name': 'picture1/P1-4.png', 'path': 'picture1/P1-4.png'},
    {'name': 'picture2/P2-4.png', 'path': 'picture2/P2-4.png'},
    {'name': 'sound/04_S2T1.wav', 'path': 'sound/04_S2T1.wav'},
    {'name': 'picture1/P1-5.png', 'path': 'picture1/P1-5.png'},
    {'name': 'picture2/P2-5.png', 'path': 'picture2/P2-5.png'},
    {'name': 'sound/05_S3T2.wav', 'path': 'sound/05_S3T2.wav'},
    {'name': 'picture1/P1-6.png', 'path': 'picture1/P1-6.png'},
    {'name': 'picture2/P2-6.png', 'path': 'picture2/P2-6.png'},
    {'name': 'sound/06_S2T2.wav', 'path': 'sound/06_S2T2.wav'},
    {'name': 'picture1/P1-7.png', 'path': 'picture1/P1-7.png'},
    {'name': 'picture2/P2-7.png', 'path': 'picture2/P2-7.png'},
    {'name': 'sound/07_S3T2.wav', 'path': 'sound/07_S3T2.wav'},
    {'name': 'picture1/P1-8.png', 'path': 'picture1/P1-8.png'},
    {'name': 'picture2/P2-8.png', 'path': 'picture2/P2-8.png'},
    {'name': 'sound/08_S2T2.wav', 'path': 'sound/08_S2T2.wav'},
    {'name': 'picture1/P1-9.png', 'path': 'picture1/P1-9.png'},
    {'name': 'picture2/P2-9.png', 'path': 'picture2/P2-9.png'},
    {'name': 'sound/09_S3T3.wav', 'path': 'sound/09_S3T3.wav'},
    {'name': 'picture1/P1-10.png', 'path': 'picture1/P1-10.png'},
    {'name': 'picture2/P2-10.png', 'path': 'picture2/P2-10.png'},
    {'name': 'sound/10_S2T3.wav', 'path': 'sound/10_S2T3.wav'},
    {'name': 'picture1/P1-11.png', 'path': 'picture1/P1-11.png'},
    {'name': 'picture2/P2-11.png', 'path': 'picture2/P2-11.png'},
    {'name': 'sound/11_S2T3.wav', 'path': 'sound/11_S2T3.wav'},
    {'name': 'picture1/P1-12.png', 'path': 'picture1/P1-12.png'},
    {'name': 'picture2/P2-12.png', 'path': 'picture2/P2-12.png'},
    {'name': 'sound/12_S3T3.wav', 'path': 'sound/12_S3T3.wav'},
    {'name': 'picture1/P1-13.png', 'path': 'picture1/P1-13.png'},
    {'name': 'picture2/P2-13.png', 'path': 'picture2/P2-13.png'},
    {'name': 'sound/13_S2T4.wav', 'path': 'sound/13_S2T4.wav'},
    {'name': 'picture1/P1-14.png', 'path': 'picture1/P1-14.png'},
    {'name': 'picture2/P2-14.png', 'path': 'picture2/P2-14.png'},
    {'name': 'sound/14_S3T4.wav', 'path': 'sound/14_S3T4.wav'},
    {'name': 'picture1/P1-15.png', 'path': 'picture1/P1-15.png'},
    {'name': 'picture2/P2-15.png', 'path': 'picture2/P2-15.png'},
    {'name': 'sound/15_S2T4.wav', 'path': 'sound/15_S2T4.wav'},
    {'name': 'picture1/P1-16.png', 'path': 'picture1/P1-16.png'},
    {'name': 'picture2/P2-16.png', 'path': 'picture2/P2-16.png'},
    {'name': 'sound/16_S3T4.wav', 'path': 'sound/16_S3T4.wav'},
    {'name': 'picture1/P1-17.png', 'path': 'picture1/P1-17.png'},
    {'name': 'picture2/P2-17.png', 'path': 'picture2/P2-17.png'},
    {'name': 'sound/17_S2T24.wav', 'path': 'sound/17_S2T24.wav'},
    {'name': 'picture1/P1-18.png', 'path': 'picture1/P1-18.png'},
    {'name': 'picture2/P2-18.png', 'path': 'picture2/P2-18.png'},
    {'name': 'sound/18_S3T24.wav', 'path': 'sound/18_S3T24.wav'},
    {'name': 'picture1/P1-19.png', 'path': 'picture1/P1-19.png'},
    {'name': 'picture2/P2-19.png', 'path': 'picture2/P2-19.png'},
    {'name': 'sound/19_S2T24.wav', 'path': 'sound/19_S2T24.wav'},
    {'name': 'picture1/P1-20.png', 'path': 'picture1/P1-20.png'},
    {'name': 'picture2/P2-20.png', 'path': 'picture2/P2-20.png'},
    {'name': 'sound/20_S3T24.wav', 'path': 'sound/20_S3T24.wav'},
    {'name': 'picture1/P1-21.png', 'path': 'picture1/P1-21.png'},
    {'name': 'picture2/P2-21.png', 'path': 'picture2/P2-21.png'},
    {'name': 'sound/21_S2T42.wav', 'path': 'sound/21_S2T42.wav'},
    {'name': 'picture1/P1-22.png', 'path': 'picture1/P1-22.png'},
    {'name': 'picture2/P2-22.png', 'path': 'picture2/P2-22.png'},
    {'name': 'sound/22_S3T42.wav', 'path': 'sound/22_S3T42.wav'},
    {'name': 'picture1/P1-23.png', 'path': 'picture1/P1-23.png'},
    {'name': 'picture2/P2-23.png', 'path': 'picture2/P2-23.png'},
    {'name': 'sound/23_S2T42.wav', 'path': 'sound/23_S2T42.wav'},
    {'name': 'picture1/P1-24.png', 'path': 'picture1/P1-24.png'},
    {'name': 'picture2/P2-24.png', 'path': 'picture2/P2-24.png'},
    {'name': 'sound/24_S3T42.wav', 'path': 'sound/24_S3T42.wav'},
    {'name': 'picture1/TP1-1.png', 'path': 'picture1/TP1-1.png'},
    {'name': 'picture2/Filler.png', 'path': 'picture2/Filler.png'},
    {'name': 'sound/01_T1-1.wav', 'path': 'sound/01_T1-1.wav'},
    {'name': 'picture1/Filler.png', 'path': 'picture1/Filler.png'},
    {'name': 'picture2/TP2-2.png', 'path': 'picture2/TP2-2.png'},
    {'name': 'sound/02_T1-2.wav', 'path': 'sound/02_T1-2.wav'},
    {'name': 'picture1/TP1-3.png', 'path': 'picture1/TP1-3.png'},
    {'name': 'sound/03_T2-1.wav', 'path': 'sound/03_T2-1.wav'},
    {'name': 'picture2/TP2-4.png', 'path': 'picture2/TP2-4.png'},
    {'name': 'sound/04_T2-2.wav', 'path': 'sound/04_T2-2.wav'},
    {'name': 'picture1/TP1-5.png', 'path': 'picture1/TP1-5.png'},
    {'name': 'sound/05_T3-1.wav', 'path': 'sound/05_T3-1.wav'},
    {'name': 'picture2/TP2-6.png', 'path': 'picture2/TP2-6.png'},
    {'name': 'sound/06_T3-2.wav', 'path': 'sound/06_T3-2.wav'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var instructions;
var key_resp;
var trialClock;
var left_image;
var right_image;
var sounds;
var mouse;
var EndClock;
var TheEnd;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: 'Welcome to the experiment!\n\nInstructions: On each slide, you will hear an audio clip. Once it finishes, choose the sentence that best matches what you heard. One sentence will appear on the left and the other on the right. Each clip will play only once, so please respond as quickly and accurately as you can.\n\nPress the space bar to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  left_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.4), 0], 
    draggable: false,
    size : [0.5, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  right_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.4, 0], 
    draggable: false,
    size : [0.5, 0.3],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  sounds = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sounds.setVolume(1.0);
  sounds.isPlaying = false;
  sounds.isFinished = false;
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  TheEnd = new visual.TextStim({
    win: psychoJS.window,
    name: 'TheEnd',
    text: 'Please wait while we are uploading your results...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var InstructionsMaxDurationReached;
var _key_resp_allKeys;
var InstructionsMaxDuration;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    InstructionsClock.reset();
    routineTimer.reset();
    InstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('Instructions.started', globalClock.getTime());
    InstructionsMaxDuration = null
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(instructions);
    InstructionsComponents.push(key_resp);
    
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions* updates
    if (t >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index
      
      instructions.setAutoDraw(true);
    }
    
    
    // if instructions is active this frame...
    if (instructions.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial1;
function trial1LoopBegin(trial1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trial1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Index chart.xlsx',
      seed: undefined, name: 'trial1'
    });
    psychoJS.experiment.addLoop(trial1); // add the loop to the experiment
    currentLoop = trial1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trial1.forEach(function() {
      snapshot = trial1.getSnapshot();
    
      trial1LoopScheduler.add(importConditions(snapshot));
      trial1LoopScheduler.add(trialRoutineBegin(snapshot));
      trial1LoopScheduler.add(trialRoutineEachFrame());
      trial1LoopScheduler.add(trialRoutineEnd(snapshot));
      trial1LoopScheduler.add(trial1LoopEndIteration(trial1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trial1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trial1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trial1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trialMaxDurationReached;
var gotValidClick;
var trialMaxDuration;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trialClock.reset();
    routineTimer.reset();
    trialMaxDurationReached = false;
    // update component parameters for each repeat
    left_image.setImage(l_image);
    right_image.setImage(r_image);
    sounds.isFinished = false;
    sounds.setValue(target_sound);
    sounds.secs=4.0;
    sounds.setVolume(1.0);
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('trial.started', globalClock.getTime());
    trialMaxDuration = null
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(left_image);
    trialComponents.push(right_image);
    trialComponents.push(sounds);
    trialComponents.push(mouse);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *left_image* updates
    if (t >= 0.0 && left_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_image.tStart = t;  // (not accounting for frame time here)
      left_image.frameNStart = frameN;  // exact frame index
      
      left_image.setAutoDraw(true);
    }
    
    
    // if left_image is active this frame...
    if (left_image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *right_image* updates
    if (t >= 0.0 && right_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_image.tStart = t;  // (not accounting for frame time here)
      right_image.frameNStart = frameN;  // exact frame index
      
      right_image.setAutoDraw(true);
    }
    
    
    // if right_image is active this frame...
    if (right_image.status === PsychoJS.Status.STARTED) {
    }
    
    if (sounds.status === STARTED) {
        sounds.isPlaying = true;
        if (t >= (sounds.getDuration() + sounds.tStart)) {
            sounds.isFinished = true;
        }
    }
    // start/stop sounds
    if (t >= 0.1 && sounds.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sounds.tStart = t;  // (not accounting for frame time here)
      sounds.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sounds.play(); });  // screen flip
      sounds.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 0.1 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (sounds.status === PsychoJS.Status.STARTED && t >= frameRemains || sounds.isFinished) {
      // keep track of stop time/frame for later
      sounds.tStop = t;  // not accounting for scr refresh
      sounds.frameNStop = frameN;  // exact frame index
      // update status
      sounds.status = PsychoJS.Status.FINISHED;
      // stop playback
      sounds.stop();
    }
    // *mouse* updates
    if (t >= 0.5 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse is active this frame...
    if (mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([left_image, right_image])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse.clicked_name.push(null);
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trial.stopped', globalClock.getTime());
    sounds.stop();  // ensure sound has stopped at end of Routine
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndMaxDurationReached;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    EndClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    EndMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'Ooo7H13kZ8nF', // ★ UPDATE WITH YOUR DATAPIPE EXPERIMENT ID ★
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
    
    psychoJS.experiment.addData('End.started', globalClock.getTime());
    EndMaxDuration = null
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(TheEnd);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *TheEnd* updates
    if (t >= 0.0 && TheEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TheEnd.tStart = t;  // (not accounting for frame time here)
      TheEnd.frameNStart = frameN;  // exact frame index
      
      TheEnd.setAutoDraw(true);
    }
    
    
    // if TheEnd is active this frame...
    if (TheEnd.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (TheEnd.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      TheEnd.tStop = t;  // not accounting for scr refresh
      TheEnd.frameNStop = frameN;  // exact frame index
      // update status
      TheEnd.status = PsychoJS.Status.FINISHED;
      TheEnd.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('End.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (EndMaxDurationReached) {
        EndClock.add(EndMaxDuration);
    } else {
        EndClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
