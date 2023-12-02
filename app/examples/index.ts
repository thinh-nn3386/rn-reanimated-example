
import WorkletRuntimeExample from "./WorkletRuntimeExample";

interface Example {
  icon?: string;
  title: string;
  screen: React.FC;
}


export const EXAMPLE_SCREENS: Record<string, Example> = {
  TestScreen: {
    title: 'test',
    screen: WorkletRuntimeExample
  }
} as const

export const EXAMPLES = Object.keys(EXAMPLE_SCREENS) as (keyof typeof EXAMPLE_SCREENS)[]
