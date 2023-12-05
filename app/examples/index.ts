
import { Modal } from "react-native";
import AnimatedKeyboardExample from "./AnimatedKeyboardExample";
import AnimatedSensorAccelerometerExample from "./AnimatedSensorAccelerometerExample";
import ArticleProgressExample from "./ArticleProgressExample";
import BokehExample from "./BokehExample";
import BubblesExample from "./BubblesExample";
import ChatHeadsExample from "./ChatHeadsExample";
import CubesExample from "./CubesExample";
import PagerExample from "./CustomHandler/PagerExample";
import DispatchCommandExample from "./DispatchCommandExample";
import EmojiWaterfallExample from "./EmojiWaterfallExample";
import FrameCallbackExample from "./FrameCallbackExample";
import GetViewPropExample from "./GetViewPropExample";
import AnimatedListExample from "./LayoutAnimations/AnimatedList";
import BasicLayoutAnimation from "./LayoutAnimations/BasicLayoutAnimation";
import BasicNestedAnimation from "./LayoutAnimations/BasicNestedAnimation";
import BasicNestedLayoutAnimation from "./LayoutAnimations/BasicNestedLayoutAnimation";
import CustomLayoutAnimationScreen from "./LayoutAnimations/CustomLayout";
import KeyframeAnimation from "./LayoutAnimations/KeyframeAnimation";
import MountingUnmounting from "./LayoutAnimations/MountingUnmounting";
import OlympicAnimation from "./LayoutAnimations/OlympicAnimation";
import ReactionsCounterExample from "./LayoutAnimations/ReactionsCounterExample";
import LettersExample from "./LettersExample";
import LightBoxExample from "./LightBoxExample";
import LiquidSwipe from "./LiquidSwipe/LiquidSwipe";
import MatrixTransform from "./MatrixTransform";
import MeasureExample from "./MeasureExample";
import PinExample from "./PinExample";
import ScrollToExample from "./ScrollToExample";
import ScrollViewOffsetExample from "./ScrollViewOffsetExample";
import SetNativePropsExample from "./SetNativePropsExample.";
import GalleryExample from "./SharedElementTransitions/Gallery";
import ProfilesExample from "./SharedElementTransitions/Profiles";
import ProgressTransitionExample from "./SharedElementTransitions/ProgressTransition";
import SwipeableListExample from "./SwipeableListExample";
import VolumeExample from "./VolumeExample";
import WobbleExample from "./WobbleExample";
import NativeModals from "./LayoutAnimations/NativeModals";
import Carousel from "./LayoutAnimations/Carousel";
import ReducedMotionLayoutExample from "./LayoutAnimations/ReducedMotionLayoutExample";
import NestedLayoutAnimationConfig from "./LayoutAnimations/NestedLayoutAnimationConfig";
import CardExample from "./SharedElementTransitions/Card";
import CustomTransitionExample from "./SharedElementTransitions/CustomTransition";
import LayoutAnimationExample from "./SharedElementTransitions/LayoutAnimation";
import ManyScreensExample from "./SharedElementTransitions/ManyScreens";
import ManyTagsExample from "./SharedElementTransitions/ManyTags";
import NestedStacksExample from "./SharedElementTransitions/NestedStacks";
import ModalsExample from "./SharedElementTransitions/Modals";
import FlatListExample from "./SharedElementTransitions/FlatList";
import ImageStackExample from "./SharedElementTransitions/ImageStack";
import RestoreStateExample from "./SharedElementTransitions/RestoreState";
import DuplicateTagsExample from "./SharedElementTransitions/DuplicateTags";
import ReducedMotionSharedExample from "./SharedElementTransitions/ReducedMotionSharedExample";
import TransitionRestartExample from "./SharedElementTransitions/TransitionRestart";

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

  MatrixExample: {
    icon: '🧮',
    title: 'useAnimatedStyle with matrix',
    screen: MatrixTransform,
  },
  GetViewPropExample: {
    icon: '🔎',
    title: 'getViewProp',
    screen: GetViewPropExample,
  },
  ChatHeadsExample: {
    title: 'Chat heads',
    screen: ChatHeadsExample,
    heart: true
  },
  CubesExample: {
    title: 'Cubes',
    screen: CubesExample,
  },
  PinExample: {
    title: 'PIN example',
    screen: PinExample,
  },
  WobbleExample: {
    title: 'Wobble example',
    screen: WobbleExample,
  },
  // PagerExample: {
  //   title: 'Pager example',
  //   screen: PagerExample,
  // },


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

  // // Layout Animations
  BasicLayoutAnimation: {
    title: '[LA] Basic layout animation',
    screen: BasicLayoutAnimation,
  },
  BasicNestedAnimation: {
    title: '[LA] Basic nested animation',
    screen: BasicNestedAnimation,
  },
  BasicNestedLayoutAnimation: {
    title: '[LA] Basic nested layout animation',
    screen: BasicNestedLayoutAnimation,
  },

  KeyframeAnimation: {
    title: '[LA] Keyframe animation',
    screen: KeyframeAnimation,
  },

  ParticipantList: {
    title: '[LA] Participant List',
    screen: AnimatedListExample,
  },
  OlympicAnimation: {
    title: '[LA] Olympic animation',
    screen: OlympicAnimation,
  },
  CustomLayoutAnimation: {
    title: '[LA] Custom layout animation',
    screen: CustomLayoutAnimationScreen,
  },
  MountingUnmounting: {
    title: '[LA] Mounting Unmounting',
    screen: MountingUnmounting,
  },
  ReactionsCounterExample: {
    title: '[LA] Reactions counter',
    screen: ReactionsCounterExample,
  },
  Carousel: {
    title: '[LA] Carousel',
    screen: Carousel,
  },
  ReducedMotionLayoutExample: {
    title: '[LA] Reduced Motion',
    screen: ReducedMotionLayoutExample,
  },
  NestedLayoutAnimationConfig: {
    title: '[LA] Nested LayoutAnimationConfig',
    screen: NestedLayoutAnimationConfig,
  },

  // // Shared Element Transitions
  CardExample: {
    title: '[SET] Card',
    screen: CardExample,
  },
  CustomTransitionExample: {
    title: '[SET] Custom transition',
    screen: CustomTransitionExample,
  },
  LayoutAnimationExample: {
    title: '[SET] Layout Animation',
    screen: LayoutAnimationExample,
  },
  ManyScreensExample: {
    title: '[SET] Many screens',
    screen: ManyScreensExample,
  },
  ManyTagsExample: {
    title: '[SET] Many tags',
    screen: ManyTagsExample,
  },
  NestedStacksExample: {
    title: '[SET] Nested stacks',
    screen: NestedStacksExample,
  },
  ModalsExample: {
    title: '[SET] Modals',
    screen: ModalsExample,
  },
  FlatListExample: {
    title: '[SET] FlatList',
    screen: FlatListExample,
  },
  ImageStackExample: {
    title: '[SET] Image Stack',
    screen: ImageStackExample,
  },
  RestoreStateExample: {
    title: '[SET] Restore State',
    screen: RestoreStateExample,
  },
  DuplicateTagsExample: {
    title: '[SET] Duplicate Tags',
    screen: DuplicateTagsExample,
  },
  ReducedMotionSharedExample: {
    title: '[SET] Reduced Motion',
    screen: ReducedMotionSharedExample,
  },
  TransitionRestartExample: {
    title: '[SET] Transition Restart',
    screen: TransitionRestartExample,
  },

} as const

export const EXAMPLES = Object.keys(EXAMPLE_SCREENS) as (keyof typeof EXAMPLE_SCREENS)[]
