import { cn } from "@/lib/utils";

export const BentoGrid = ({
                            className,
                            children,
                          }: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
      <div
          className={cn(
              "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
              className
          )}
      >
        {children}
      </div>
  );
};

export const BentoGridItem = ({
                                className,
                                title,
                                description,
                                header,
                                icon,
                              }: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
      <div
          className={cn(
              "row-span-1 rounded-xl group/bento hover:shadow-lg transition duration-200 shadow-md dark:shadow-sm p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-600 flex flex-col justify-between space-y-4 relative overflow-hidden",
              className
          )}
      >
        <div className="absolute inset-0 bg-pattern opacity-20 z-0 pointer-events-none rounded-xl" />
        {header}
        <div className="relative z-10 group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
  );
};
