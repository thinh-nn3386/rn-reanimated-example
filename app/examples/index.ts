
import AnimatedKeyboardExample from "./AnimatedKeyboardExample";
import AnimatedSensorAccelerometerExample from "./AnimatedSensorAccelerometerExample";
import ArticleProgressExample from "./ArticleProgressExample";
import BokehExample from "./BokehExample";
import BubblesExample from "./BubblesExample";
import DispatchCommandExample from "./DispatchCommandExample";
import EmojiWaterfallExample from "./EmojiWaterfallExample";
import FrameCallbackExample from "./FrameCallbackExample";
import LettersExample from "./LettersExample";
import LightBoxExample from "./LightBoxExample";
import LiquidSwipe from "./LiquidSwipe/LiquidSwipe";
import MeasureExample from "./MeasureExample";
import ScrollToExample from "./ScrollToExample";
import ScrollViewOffsetExample from "./ScrollViewOffsetExample";
import SetNativePropsExample from "./SetNativePropsExample.";
import GalleryExample from "./SharedElementTransitions/Gallery";
import ProfilesExample from "./SharedElementTransitions/Profiles";
import ProgressTransitionExample from "./SharedElementTransitions/ProgressTransition";
import SwipeableListExample from "./SwipeableListExample";
import VolumeExample from "./VolumeExample";

interface Example {
  icon?: string;
  title: string;
  screen: React.FC;
  heart?: boolean
}


export const EXAMPLE_SCREENS: Record<string, Example> = {
  BokehExample: {
    icon: '✨',
    title: 'Bokeh',
    screen: BokehExample,
  },
  BubblesExample: {
    icon: '🫧',
    title: 'Bubbles',
    screen: BubblesExample,
  },
  // BilliardExample: {
  //   icon: '🎱',
  //   title: 'Billiard',
  //   screen: BilliardExample,
  // },
  EmojiWaterfallExample: {
    icon: '💸',
    title: 'Emoji waterfall',
    screen: EmojiWaterfallExample,
  },
  LightBoxExample: {
    icon: '📷',
    title: 'Camera roll',
    screen: LightBoxExample,
  },
  // LiquidSwipe: {
  //   icon: '♠️',
  //   title: 'Liquid swipe',
  //   screen: LiquidSwipe,
  // },
  SwipeableListExample: {
    icon: '📞',
    title: 'Swipeable list',
    screen: SwipeableListExample,
  },
  ArticleProgressExample: {
    icon: '📰',
    title: 'Article progress',
    screen: ArticleProgressExample,
  },
  LettersExample: {
    icon: '📖',
    title: 'Letters',
    screen: LettersExample,
    heart: true
  },
  SetNativePropsExample: {
    icon: '🪄',
    title: 'setNativeProps',
    screen: SetNativePropsExample,
  },
  AnimatedKeyboardExample: {
    icon: '⌨️',
    title: 'useAnimatedKeyboard',
    screen: AnimatedKeyboardExample,
  },
  AnimatedSensorAccelerometerExample: {
    icon: '🚀',
    title: 'useAnimatedSensor - accelerometer',
    screen: AnimatedSensorAccelerometerExample,
  },
  // AnimatedSensorGyroscopeExample: {
  //   icon: '⚖️',
  //   title: 'useAnimatedSensor - gyroscope',
  //   screen: AnimatedSensorGyroscopeExample,
  // },
  // AnimatedSensorGravityExample: {
  //   icon: '🌎',
  //   title: 'useAnimatedSensor - gravity',
  //   screen: AnimatedSensorGravityExample,
  // },
  // AnimatedSensorMagneticFieldExample: {
  //   icon: '🧲',
  //   title: 'useAnimatedSensor - magnetic field',
  //   screen: AnimatedSensorMagneticFieldExample,
  // },
  // AnimatedSensorRotationExample: {
  //   icon: '🔄',
  //   title: 'useAnimatedSensor - rotation',
  //   screen: AnimatedSensorRotationExample,
  // },
  FrameCallbackExample: {
    icon: '🗣',
    title: 'useFrameCallback',
    screen: FrameCallbackExample,
  },
  ScrollToExample: {
    icon: '🦘',
    title: 'scrollTo',
    screen: ScrollToExample,
  },
  ScrollViewOffsetExample: {
    icon: '𝌍',
    title: 'useScrollViewOffset',
    screen: ScrollViewOffsetExample,
  },
  DispatchCommandExample: {
    icon: '🫡',
    title: 'Dispatch command',
    screen: DispatchCommandExample,
  },
  MeasureExample: {
    icon: '📐',
    title: 'measure',
    screen: MeasureExample,
  },
  VolumeExample: {
    icon: '🎧',
    title: 'Volume slider & sensor',
    screen: VolumeExample,
  },

  // Shared transition -> TODO: bugs when goback
  GalleryExample: {
    icon: '🇮🇹',
    title: 'Gallery',
    screen: GalleryExample,
  },
  ProfilesExample: {
    icon: '🙆‍♂️',
    title: 'Profiles',
    screen: ProfilesExample,
  },
  ProgressTransitionExample: {
    icon: '☕',
    title: 'Progress transition',
    screen: ProgressTransitionExample,
  },
  // MatrixExample: {
  //   icon: '🧮',
  //   title: 'useAnimatedStyle with matrix',
  //   screen: MatrixTransform,
  // },
  // SpringExample: {
  //   icon: '🕰',
  //   title: 'Pendulum example',
  //   screen: PendulumExample,
  // },
  // SpringClampExample: {
  //   icon: '🗜',
  //   title: 'Spring with Clamp',
  //   screen: WithClampExample,
  // },
  // ReducedMotionExample: {
  //   icon: '⏸️',
  //   title: 'Reduced Motion',
  //   screen: ReducedMotionExample,
  // },
  // GetViewPropExample: {
  //   icon: '🔎',
  //   title: 'getViewProp',
  //   screen: GetViewPropExample,
  // },
  // LogExample: {
  //   icon: '⌨',
  //   title: 'Log test',
  //   screen: LogExample,
  // },
  // WorkletFactoryCrash: {
  //   icon: '🏭',
  //   title: 'Worklet factory crash',
  //   screen: WorkletFactoryCrash,
  // },
  // HabitsExample: {
  //   icon: '🧑‍💻',
  //   title: 'Habits',
  //   screen: HabitsExample,
  // },

  // // Old examples

  // AnimatedStyleUpdateExample: {
  //   title: 'Animated style update',
  //   screen: AnimatedStyleUpdateExample,
  // },
  // SharedStyleExample: {
  //   title: 'Shared style',
  //   screen: SharedStyleExample,
  // },
  // AnimatedTabBarExample: {
  //   title: 'Tab bar',
  //   screen: AnimatedTabBarExample,
  // },
  // ChatHeadsExample: {
  //   title: 'Chat heads',
  //   screen: ChatHeadsExample,
  // },
  // CubesExample: {
  //   title: 'Cubes',
  //   screen: CubesExample,
  // },
  // DragAndSnapExample: {
  //   title: 'Drag and snap',
  //   screen: DragAndSnapExample,
  // },
  // ColorInterpolationExample: {
  //   title: 'Color interpolation',
  //   screen: ColorInterpolationExample,
  // },
  // ExtrapolationExample: {
  //   title: 'Extrapolation example',
  //   screen: ExtrapolationExample,
  // },
  // InvertedFlatListExample: {
  //   title: 'Inverted FlatList example',
  //   screen: InvertedFlatListExample,
  // },
  // OldAnimatedSensorExample: {
  //   title: 'Old animated sensor example',
  //   screen: OldAnimatedSensorExample,
  // },
  // OldMeasureExample: {
  //   title: 'Accordion',
  //   screen: OldMeasureExample,
  // },
  // PinExample: {
  //   title: 'PIN example',
  //   screen: PinExample,
  // },
  // ScrollableViewExample: {
  //   title: 'Scrollable view example',
  //   screen: ScrollableViewExample,
  // },
  // ScrollEventExample: {
  //   title: 'Scroll event example',
  //   screen: ScrollEventExample,
  // },
  // WobbleExample: {
  //   title: 'Wobble example',
  //   screen: WobbleExample,
  // },
  // PagerExample: {
  //   title: 'Pager example',
  //   screen: PagerExample,
  // },

  // // Layout Animations

  // DeleteAncestorOfExiting: {
  //   title: '[LA] Deleting view with an exiting animation',
  //   screen: DeleteAncestorOfExiting,
  // },
  // NestedNativeStacksWithLayout: {
  //   title: '[LA] Nested NativeStacks with layout',
  //   screen: NestedNativeStacksWithLayout,
  // },
  // BasicLayoutAnimation: {
  //   title: '[LA] Basic layout animation',
  //   screen: BasicLayoutAnimation,
  // },
  // BasicNestedAnimation: {
  //   title: '[LA] Basic nested animation',
  //   screen: BasicNestedAnimation,
  // },
  // BasicNestedLayoutAnimation: {
  //   title: '[LA] Basic nested layout animation',
  //   screen: BasicNestedLayoutAnimation,
  // },
  // NestedLayoutAnimations: {
  //   title: '[LA] Nested layout animations',
  //   screen: NestedTest,
  // },
  // CombinedLayoutAnimations: {
  //   title: '[LA] Entering and Exiting with Layout',
  //   screen: CombinedTest,
  // },
  // DefaultAnimations: {
  //   title: '[LA] Default layout animations',
  //   screen: DefaultAnimations,
  // },
  // DefaultTransitions: {
  //   title: '[LA] Default layout transitions',
  //   screen: WaterfallGridExample,
  // },
  // KeyframeAnimation: {
  //   title: '[LA] Keyframe animation',
  //   screen: KeyframeAnimation,
  // },
  // ParticipantList: {
  //   title: '[LA] Participant List',
  //   screen: AnimatedListExample,
  // },
  // OlympicAnimation: {
  //   title: '[LA] Olympic animation',
  //   screen: OlympicAnimation,
  // },
  // CustomLayoutAnimation: {
  //   title: '[LA] Custom layout animation',
  //   screen: CustomLayoutAnimationScreen,
  // },
  // ModalNewAPI: {
  //   title: '[LA] ModalNewAPI',
  //   screen: ModalNewAPI,
  // },
  // SpringLayoutAnimation: {
  //   title: '[LA] Spring Layout Animation',
  //   screen: SpringLayoutAnimation,
  // },
  // MountingUnmounting: {
  //   title: '[LA] Mounting Unmounting',
  //   screen: MountingUnmounting,
  // },
  // ReactionsCounterExample: {
  //   title: '[LA] Reactions counter',
  //   screen: ReactionsCounterExample,
  // },
  // SwipeableList: {
  //   title: '[LA] Swipeable list',
  //   screen: SwipeableList,
  // },
  // Modal: {
  //   title: '[LA] Modal',
  //   screen: Modal,
  // },
  // NativeModals: {
  //   title: '[LA] Native modals (RN and Screens)',
  //   screen: NativeModals,
  // },
  // Carousel: {
  //   title: '[LA] Carousel',
  //   screen: Carousel,
  // },
  // ReducedMotionLayoutExample: {
  //   title: '[LA] Reduced Motion',
  //   screen: ReducedMotionLayoutExample,
  // },
  // NestedLayoutAnimationConfig: {
  //   title: '[LA] Nested LayoutAnimationConfig',
  //   screen: NestedLayoutAnimationConfig,
  // },
  // FlatListSkipEnteringExiting: {
  //   title: '[LA] FlatList skip entering & exiting',
  //   screen: FlatListSkipEnteringExiting,
  // },

  // // Shared Element Transitions

  // CardExample: {
  //   title: '[SET] Card',
  //   screen: CardExample,
  // },
  // CustomTransitionExample: {
  //   title: '[SET] Custom transition',
  //   screen: CustomTransitionExample,
  // },
  // LayoutAnimationExample: {
  //   title: '[SET] Layout Animation',
  //   screen: LayoutAnimationExample,
  // },
  // ManyScreensExample: {
  //   title: '[SET] Many screens',
  //   screen: ManyScreensExample,
  // },
  // ManyTagsExample: {
  //   title: '[SET] Many tags',
  //   screen: ManyTagsExample,
  // },
  // NestedStacksExample: {
  //   title: '[SET] Nested stacks',
  //   screen: NestedStacksExample,
  // },
  // ModalsExample: {
  //   title: '[SET] Modals',
  //   screen: ModalsExample,
  // },
  // FlatListExample: {
  //   title: '[SET] FlatList',
  //   screen: FlatListExample,
  // },
  // ImageStackExample: {
  //   title: '[SET] Image Stack',
  //   screen: ImageStackExample,
  // },
  // RestoreStateExample: {
  //   title: '[SET] Restore State',
  //   screen: RestoreStateExample,
  // },
  // DuplicateTagsExample: {
  //   title: '[SET] Duplicate Tags',
  //   screen: DuplicateTagsExample,
  // },
  // ReducedMotionSharedExample: {
  //   title: '[SET] Reduced Motion',
  //   screen: ReducedMotionSharedExample,
  // },
  // TransitionRestartExample: {
  //   title: '[SET] Transition Restart',
  //   screen: TransitionRestartExample,
  // },

} as const

export const EXAMPLES = Object.keys(EXAMPLE_SCREENS) as (keyof typeof EXAMPLE_SCREENS)[]
