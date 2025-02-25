import NavigationBar from '@/components/navigation-bar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen flex-col overflow-hidden overscroll-none">
      <NavigationBar />
      <div className="flex h-full flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
