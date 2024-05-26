// /app/resume/layout.tsx

const ResumeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-gray-200 p-4">
        {/* Menu content goes here */}
        <nav>
          <ul>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="w-3/4 bg-white p-4 overflow-y-auto">{children}</main>
    </div>
  );
};

export default ResumeLayout;
