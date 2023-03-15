function shout(hello) {
    return hello.toUpperCase();
  }
  function whisper(HELLO) {
    return HELLO.toLowerCase();
  }
  function logShout(hello) {
    console.log(hello.toUpperCase());
  }
  function logWhisper(HELLO) {
    console.log(HELLO.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(HELLO) {
    if (HELLO === HELLO.toLowerCase()) {
      return "I can't hear you!";
    } else {
      return "Hi!";
    }
  }
  function sayHiToHeadphonedRoommate(hello) {
    if (hello === hello.toUpperCase()) {
      return "YES INDEED!";
    } else {
      return "I can't hear you!";
    }
  }
  function sayHiToHeadphonedRoommate(HELLO) {
    if (HELLO === HELLO.toLowerCase()) {
      return "I can't hear you!";
    } else if (HELLO === "Let's have dinner together!") {
      return "I would love to!";
    } else {
      return "YES INDEED!";
    }
  }