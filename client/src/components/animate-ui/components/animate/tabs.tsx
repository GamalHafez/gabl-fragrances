import {
  Tabs as TabsPrimitive,
  TabsList as TabsListPrimitive,
  TabsTrigger as TabsTriggerPrimitive,
  TabsContent as TabsContentPrimitive,
  TabsContents as TabsContentsPrimitive,
  TabsHighlight as TabsHighlightPrimitive,
  TabsHighlightItem as TabsHighlightItemPrimitive,
  type TabsProps as TabsPrimitiveProps,
  type TabsListProps as TabsListPrimitiveProps,
  type TabsTriggerProps as TabsTriggerPrimitiveProps,
  type TabsContentProps as TabsContentPrimitiveProps,
  type TabsContentsProps as TabsContentsPrimitiveProps,
} from "@/components/animate-ui/primitives/animate/tabs";
import { useTheme } from "@/context/theme/useTheme";
import { cn } from "@/lib/utils";

type TabsProps = TabsPrimitiveProps;

function Tabs({ className, ...props }: TabsProps) {
  return (
    <TabsPrimitive
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

type TabsListProps = TabsListPrimitiveProps;

function TabsList({ className, ...props }: TabsListProps) {
  const { isDark } = useTheme();

  return (
    <TabsHighlightPrimitive
      className={cn(
        "absolute inset-0 z-0 rounded-xl border shadow-sm transition-colors duration-300",
        isDark
          ? "border-white/10 bg-zinc-900/50"
          : "border-zinc-200 bg-zinc-100",
      )}
    >
      <TabsListPrimitive
        className={cn(
          "mx-auto inline-flex h-12 w-fit items-center justify-center gap-2 rounded-xl p-1",
          "text-sm md:text-base lg:text-lg",
          isDark ? "bg-zinc-800" : "bg-transparent backdrop-blur-sm",
          className,
        )}
        {...props}
      />
    </TabsHighlightPrimitive>
  );
}

type TabsTriggerProps = TabsTriggerPrimitiveProps;

function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  const { isDark } = useTheme();

  return (
    <TabsHighlightItemPrimitive value={props.value} className="flex-1">
      <TabsTriggerPrimitive
        className={cn(
          "inline-flex h-full w-full flex-1 cursor-pointer items-center justify-center",
          "rounded-lg px-4 py-2",
          "text-sm font-medium tracking-wide capitalize",
          "transition-all duration-300",
          "focus-visible:ring-brand-500/40 focus-visible:ring-2 focus-visible:outline-none",
          "disabled:pointer-events-none disabled:opacity-50",
          "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          isDark
            ? "text-zinc-400 hover:text-white data-[state=active]:text-white"
            : "text-zinc-600 hover:text-zinc-900 data-[state=active]:text-zinc-950",
          className,
        )}
        {...props}
      />
    </TabsHighlightItemPrimitive>
  );
}

type TabsContentsProps = TabsContentsPrimitiveProps;

function TabsContents(props: TabsContentsProps) {
  return <TabsContentsPrimitive {...props} />;
}

type TabsContentProps = TabsContentPrimitiveProps;

function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <TabsContentPrimitive
      className={cn("outline-none", className)}
      {...props}
    />
  );
}

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContents,
  TabsContent,
  type TabsProps,
  type TabsListProps,
  type TabsTriggerProps,
  type TabsContentsProps,
  type TabsContentProps,
};
