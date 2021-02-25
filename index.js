const watchEvent = new Event('finishedStories');

function skipAllStories() {
  console.log('Starting...');
  const jumpBtnClass = '.coreSpriteRightChevron';

  const intervalId = setInterval(() => {
    const jumpBtnEl = document.querySelector(jumpBtnClass);

    if (jumpBtnEl) {
      jumpBtnEl.click();
    } else {
      document.dispatchEvent(watchEvent);
    }
  }, 1500);

  return intervalId;
}

function stopProcess(intervalId) {
  clearInterval(intervalId);
}

function startProcess() {
  // Start skipping
  const intervalId = skipAllStories();

  // Watch to when there's no more stories
  document.addEventListener('finishedStories', () => {
    console.log('No more stories found, finishing...');
    stopProcess(intervalId);
  });
}
