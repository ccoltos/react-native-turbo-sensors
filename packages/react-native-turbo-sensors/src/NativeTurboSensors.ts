import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  addListener(eventName: string): void;

  removeListeners(count: number): void;

  // isAvailable(sensor: string): Promise<boolean>;
  //
  // setInterval(sensor: string, newInterval: number): void;
  //
  // stopListening(sensor: string): void;

  multiply(a: number, b: number): Promise<number>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('TurboSensors');
