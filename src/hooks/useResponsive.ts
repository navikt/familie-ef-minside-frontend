import { useEffect, useState } from 'react';
import { useDebouncedCallback } from './useDebounce';

export enum Device {
  MOBILE = 'MOBILE',
  TABLET = 'TABLET',
  DESKTOP = 'DESKTOP',
  UNKNOWN = 'UNKNOWN',
}

// Basert på https://learnersbucket.com/examples/interview/useresponsive-hook-in-react/
const useResponsive = () => {
  // screen resolutions
  const [state, setState] = useState<Device>(Device.UNKNOWN);

  useEffect(() => {
    // update the state on the initial load
    onResizeHandler();

    // assign the event
    Setup();

    return () => {
      // remove the event
      Cleanup();
    };
  }, []);

  // update the state on window resize
  const onResizeHandler = () => {
    const currentDevice = getCurrentDevice(window.innerWidth);

    setState(currentDevice);
  };

  const getCurrentDevice = (windowWidth: number) => {
    if (windowWidth <= 480) {
      return Device.MOBILE;
    } else if (windowWidth >= 768) {
      return Device.DESKTOP;
    }
    return Device.TABLET;
  };

  // debounce the resize call
  const debouncedCall = useDebouncedCallback(onResizeHandler, 500);

  // add event listener
  const Setup = () => {
    window.addEventListener('resize', debouncedCall, false);
  };

  // remove the listener
  const Cleanup = () => {
    window.removeEventListener('resize', debouncedCall, false);
  };

  return state;
};

export default useResponsive;
