import cn from '@utils/class-names';
import { FaChevronLeft } from 'react-icons/fa';
import { Title } from 'rizzui';

export type PageHeaderTypes = {
  title: string;
  breadcrumb: { name: string; href?: string }[];
  className?: string;
  goBack?: () => void;
  enableGoBack?: boolean;
};

export default function PageHeader({
  title,
  children,
  className,
  goBack,
  enableGoBack = false,
}: React.PropsWithChildren<PageHeaderTypes>) {
  return (
    <header className={cn('mb-6 @container xs:-mt-2 lg:mb-7', className)}>
      <div className="flex flex-col @lg:flex-row @lg:items-center @lg:justify-between">
        <div>
          {enableGoBack === true && (
            <div className="row flex items-center justify-center">
              <button onClick={goBack} className="mr-2" type="button">
                <FaChevronLeft size={16} />
              </button>
            </div>
          )}

          {!enableGoBack && (
            <Title as="h2" className="text-[22px] lg:text-2xl 4xl:text-[26px]">
              {title}
            </Title>
          )}
        </div>
        {children}
      </div>
    </header>
  );
}
