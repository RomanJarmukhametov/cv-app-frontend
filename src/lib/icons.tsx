/**
 * Returns the corresponding icon component based on the given name.
 * @param name - The name of the icon.
 * @returns The icon component or null if the name is not recognized.
 */
export function getIcon(name: string) {
  const iconStyles = "";
  switch (name) {
    case "about":
      return <AboutIcon className={iconStyles} />;
    case "education":
      return <EducationIcon className={iconStyles} />;
    case "experience":
      return <ExperienceIcon className={iconStyles} />;
    case "skills":
      return <SkillsIcon className={iconStyles} />;
    case "portfolio":
      return <PortfolioIcon className={iconStyles} />;
    case "contacts":
      return <ContactsIcon className={iconStyles} />;
    case "feedback":
      return <FeedbackIcon className={iconStyles} />;
    case "phone":
      return <PhoneIcon className={iconStyles} />;
    case "mail":
      return <MailIcon className={iconStyles} />;
    case "linkedin":
      return <LinkedInIcon className={iconStyles} />;
    case "github":
      return <GitHubIcon className={iconStyles} />;
    default:
      return null;
  }
}

/**
 * Renders an SVG icon for the About section.
 */
function AboutIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor">
      <path d="M1.16667 14C1.16667 14 0 14 0 12.8333C0 11.6667 1.16667 8.16667 7 8.16667C12.8333 8.16667 14 11.6667 14 12.8333C14 14 12.8333 14 12.8333 14H1.16667ZM7 7C7.92826 7 8.8185 6.63125 9.47487 5.97487C10.1313 5.3185 10.5 4.42826 10.5 3.5C10.5 2.57174 10.1313 1.6815 9.47487 1.02513C8.8185 0.368749 7.92826 0 7 0C6.07174 0 5.1815 0.368749 4.52513 1.02513C3.86875 1.6815 3.5 2.57174 3.5 3.5C3.5 4.42826 3.86875 5.3185 4.52513 5.97487C5.1815 6.63125 6.07174 7 7 7Z" />
    </svg>
  );
}

/**
 * Renders an SVG icon for the Education section.
 */
function EducationIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor">
      <path
        d="M2.33337 11.498V8.16296L5.45073 10.464C5.9222 10.8121 6.4564 10.9953 7.00008 10.9953C7.54377 10.9953 8.07796 10.8121 8.54943 10.464L11.6668 8.16396V11.498C11.6669 11.5637 11.6569 11.6288 11.6374 11.6895C11.6179 11.7502 11.5893 11.8054 11.5532 11.852L11.5517 11.853L11.5501 11.856L11.5447 11.862L11.5268 11.884L11.4646 11.958C11.4101 12.019 11.3323 12.105 11.2305 12.206C10.9511 12.4818 10.6542 12.7269 10.343 12.939C9.31363 13.641 8.16529 14.0051 7.00008 13.999C5.83487 14.0051 4.68653 13.641 3.65716 12.939C3.3462 12.7269 3.0496 12.4817 2.77049 12.206C2.66786 12.1042 2.56872 11.9968 2.47338 11.884L2.45549 11.862C2.41737 11.8147 2.38694 11.7582 2.36598 11.6957C2.34501 11.6332 2.33393 11.566 2.33337 11.498Z"
        fill="currentColor"
      />
      <path
        d="M13.8049 5.43193L8.16207 9.59693C7.80847 9.85801 7.40782 9.9954 7.00006 9.9954C6.5923 9.9954 6.19165 9.85801 5.83805 9.59693L0.777785 5.86193V10.4979C0.777785 10.6305 0.736812 10.7577 0.663881 10.8515C0.590949 10.9453 0.492033 10.9979 0.388892 10.9979C0.285752 10.9979 0.186835 10.9453 0.113904 10.8515C0.0409725 10.7577 5.9835e-08 10.6305 5.9835e-08 10.4979V4.99793C-3.88288e-05 4.90778 0.0188792 4.8193 0.0547517 4.74184C0.0906243 4.66439 0.142117 4.60084 0.20378 4.55793L5.83805 0.398929C6.19158 0.137555 6.59225 0 7.00006 0C7.40787 0 7.80854 0.137555 8.16207 0.398929L13.8049 4.56493C13.8642 4.60875 13.9135 4.6719 13.9477 4.74801C13.982 4.82412 14 4.91049 14 4.99843C14 5.08636 13.982 5.17274 13.9477 5.24885C13.9135 5.32496 13.8642 5.38811 13.8049 5.43193Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Renders an SVG icon for the Experience section.
 */
function ExperienceIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor">
      <path
        d="M7.71252 2.98279L11.0172 6.28826L3.3047 14H0V10.6945L7.71252 2.98201V2.98279ZM8.81408 1.88122L10.4664 0.228093C10.6125 0.0820452 10.8106 0 11.0172 0C11.2238 0 11.4219 0.0820452 11.568 0.228093L13.7719 2.432C13.918 2.5781 14 2.77621 14 2.98279C14 3.18936 13.918 3.38748 13.7719 3.53357L12.1188 5.18592L8.81408 1.88122Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Renders an SVG icon for the Skills section.
 */
function SkillsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.99574 0H11.0043C11.1645 0.000193388 11.322 0.0442666 11.4618 0.128034C11.6016 0.211745 11.719 0.33232 11.8031 0.478319C11.8031 0.478416 11.8032 0.478512 11.8032 0.478609L13.8583 4.03271C13.9595 4.20818 14.0085 4.41251 13.9988 4.61854C13.989 4.82457 13.921 5.02254 13.8037 5.18615L13.8032 5.18687L7.74449 13.6066C7.74436 13.6067 7.74424 13.6069 7.74411 13.6071C7.65655 13.7292 7.54397 13.8282 7.41506 13.8963C7.28597 13.9645 7.14395 14 7 14C6.85605 14 6.71403 13.9645 6.58494 13.8963C6.45603 13.8282 6.34345 13.7292 6.25589 13.6071C6.25576 13.6069 6.25564 13.6067 6.25551 13.6066L0.196797 5.18687L0.196276 5.18615C0.0789924 5.02254 0.0109584 4.82457 0.00121549 4.61854C-0.00852748 4.41251 0.0404827 4.20818 0.141732 4.03271L2.19678 0.478609C2.19689 0.478418 2.197 0.478226 2.19711 0.478035C2.28114 0.332164 2.39854 0.211691 2.53819 0.128034C2.67803 0.0442667 2.83553 0.000193388 2.99574 0ZM2.57889 1.71659L1.25857 4.00002H3.49226L2.57889 1.71659ZM5.13332 4.00002L7 1.33334L8.86668 4.00002H5.13332ZM9.14043 5.00002L7 11.4977L4.85957 5.00002H9.14043ZM3.86981 5.00002L6.08933 11.7378L1.24087 5.00002H3.86981ZM7.91067 11.7378L10.1302 5.00002H12.7591L7.91067 11.7378ZM12.7414 4.00002L11.4211 1.71659L10.5077 4.00002H12.7414ZM9.68904 3.50815L10.6923 1H7.93334L9.68904 3.50815ZM6.06666 1H3.3077L4.31096 3.50815L6.06666 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Renders an SVG icon for the Portfolio section.
 */
function PortfolioIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor">
      <path
        d="M12.6 2.33333H11.9V14H12.6C13.37 14 14 13.3 14 12.4444V3.88889C14 3.03333 13.37 2.33333 12.6 2.33333ZM0 3.88889V12.4444C0 13.3 0.6293 14 1.4 14H2.1V2.33333H1.4C0.6293 2.33333 0 3.03333 0 3.88889ZM9.45 0.704667C8.9733 0.458889 8.1277 0 6.9867 0C5.8436 0 5.0267 0.458889 4.55 0.704667V2.33333H2.8V14H11.2V2.33333H9.45V0.704667ZM8.4 2.33333H5.6V1.29422C5.9738 1.11533 6.3546 0.932555 6.9867 0.932555C7.6181 0.932555 8.0269 1.11456 8.4 1.29422V2.33333Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Renders an SVG icon for the Contacts section.
 */
function ContactsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor">
      <path
        d="M13.8508 0.148907C13.9237 0.221861 13.9727 0.315206 13.9915 0.416621C14.0103 0.518036 13.9978 0.622754 13.9558 0.716954L8.18664 13.6974C8.14633 13.7882 8.08038 13.8652 7.9969 13.919C7.91341 13.9728 7.81603 14.0011 7.7167 14.0003C7.61738 13.9996 7.52043 13.9698 7.43778 13.9147C7.35513 13.8596 7.29037 13.7816 7.25145 13.6902L5.16997 8.82971L0.308435 6.74722C0.21739 6.70806 0.13973 6.64321 0.0849538 6.56061C0.0301778 6.47801 0.000660125 6.38124 1.09431e-05 6.28213C-0.000638239 6.18303 0.0276092 6.08588 0.0812985 6.00257C0.134988 5.91926 0.211792 5.8534 0.302316 5.81305L13.2827 0.0438647C13.3768 0.00210038 13.4813 -0.0102174 13.5825 0.00853105C13.6837 0.0272795 13.7769 0.0762164 13.8498 0.148907H13.8508Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Renders an SVG icon for the Feedback section.
 */
function FeedbackIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor">
      <path
        d="M2.78533 10.8595C1.06133 9.74141 0 7.97926 0 6.03543C0 2.6576 3.16533 0 7 0C10.8347 0 14 2.6576 14 6.03543C14 9.41325 10.8347 12.0709 7 12.0709C6.70533 12.0709 6.412 12.0551 6.12133 12.0242L3.61133 13.7892C3.20133 14.0233 2.97333 14.0944 2.62133 13.8366C2.208 13.5321 2.224 13.1961 2.36733 12.7164L2.78533 10.8595ZM1.33333 6.03543C1.33333 7.56636 2.27867 8.99605 3.854 9.85559L4.32467 10.1134L4.20067 10.6663L3.93333 11.8497L5.8 10.5356L6.044 10.5686C6.35933 10.6124 6.67867 10.6347 7 10.6347C10.1607 10.6347 12.6667 8.53074 12.6667 6.03543C12.6667 3.54011 10.1607 1.43615 7 1.43615C3.83933 1.43615 1.33333 3.54011 1.33333 6.03543Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Renders a Phone icon for the Contacts section.
function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.75 25.5C14.6466 25.4934 9.75414 23.4632 6.1455 19.8545C2.53686 16.2459 0.506615 11.3534 0.5 6.25002C0.5 4.72503 1.1058 3.26249 2.18414 2.18416C3.26247 1.10582 4.72501 0.500021 6.25 0.500021C6.57293 0.497561 6.89531 0.526869 7.2125 0.587521C7.51914 0.632896 7.82058 0.708258 8.1125 0.812521C8.31781 0.884558 8.50076 1.00894 8.64326 1.17336C8.78576 1.33778 8.88288 1.53656 8.925 1.75002L10.6375 9.25002C10.6837 9.4536 10.6781 9.6655 10.6213 9.86637C10.5646 10.0673 10.4584 10.2507 10.3125 10.4C10.15 10.575 10.1375 10.5875 8.6 11.3875C9.83124 14.0886 11.9915 16.2577 14.6875 17.5C15.5 15.95 15.5125 15.9375 15.6875 15.775C15.8368 15.6291 16.0203 15.523 16.2211 15.4662C16.422 15.4094 16.6339 15.4039 16.8375 15.45L24.3375 17.1625C24.5441 17.2105 24.7352 17.3102 24.8926 17.4523C25.0501 17.5945 25.1687 17.7744 25.2375 17.975C25.343 18.2717 25.4225 18.577 25.475 18.8875C25.5253 19.2017 25.5504 19.5194 25.55 19.8375C25.527 21.356 24.9041 22.8037 23.8175 23.8646C22.7308 24.9255 21.2686 25.5134 19.75 25.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Renders a Mail icon for the Contacts section.
function MailIcon(props: any) {
  return (
    <svg
      {...props}
      width="30"
      height="24"
      viewBox="0 0 30 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M29.4316 8.17969C29.6602 7.99805 30 8.16797 30 8.45508V20.4375C30 21.9902 28.7402 23.25 27.1875 23.25H2.8125C1.25977 23.25 0 21.9902 0 20.4375V8.46094C0 8.16797 0.333984 8.00391 0.568359 8.18555C1.88086 9.20508 3.62109 10.5 9.59766 14.8418C10.834 15.7441 12.9199 17.6426 15 17.6309C17.0918 17.6484 19.2187 15.709 20.4082 14.8418C26.3848 10.5 28.1191 9.19922 29.4316 8.17969ZM15 15.75C16.3594 15.7734 18.3164 14.0391 19.3008 13.3242C27.0762 7.68164 27.668 7.18945 29.4609 5.7832C29.8008 5.51953 30 5.10938 30 4.67578V3.5625C30 2.00977 28.7402 0.75 27.1875 0.75H2.8125C1.25977 0.75 0 2.00977 0 3.5625V4.67578C0 5.10938 0.199219 5.51367 0.539062 5.7832C2.33203 7.18359 2.92383 7.68164 10.6992 13.3242C11.6836 14.0391 13.6406 15.7734 15 15.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Renders a LinkedIn icon for the Contacts section.
function LinkedInIcon(props: any) {
  return (
    <svg
      {...props}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.2001 0.200012H1.79445C0.914251 0.200012 0.199951 0.897512 0.199951 1.75641V20.2415C0.199951 21.1016 0.914251 21.8 1.79445 21.8H20.2001C21.0809 21.8 21.8 21.1016 21.8 20.2415V1.75641C21.8 0.897512 21.0809 0.200012 20.2001 0.200012ZM6.60615 18.6062H3.40095V8.29851H6.60615V18.6062ZM5.00355 6.88911C3.97665 6.88911 3.14655 6.05691 3.14655 5.03091C3.14655 4.00641 3.97665 3.17421 5.00355 3.17421C6.02805 3.17421 6.86025 4.00641 6.86025 5.03091C6.86025 6.05691 6.02805 6.88911 5.00355 6.88911ZM18.605 18.6062H15.4049V13.5938C15.4049 12.398 15.3815 10.8605 13.7396 10.8605C12.0722 10.8605 11.8181 12.1628 11.8181 13.5071V18.6065H8.61555V8.29851H11.6891V9.70611H11.7329C12.1607 8.89611 13.2059 8.04141 14.7647 8.04141C18.0065 8.04141 18.6053 10.1756 18.6053 12.9521L18.605 18.6062Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Renders a GitHub icon for the Contacts section.
function GitHubIcon(props: any) {
  return (
    <svg
      {...props}
      width="27"
      height="28"
      viewBox="0 0 27 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.4375 0.875H2.8125C1.25977 0.875 0 2.13477 0 3.6875V24.3125C0 25.8652 1.25977 27.125 2.8125 27.125H23.4375C24.9902 27.125 26.25 25.8652 26.25 24.3125V3.6875C26.25 2.13477 24.9902 0.875 23.4375 0.875ZM16.248 23.3574C15.7559 23.4453 15.5742 23.1406 15.5742 22.8887C15.5742 22.5723 15.5859 20.9551 15.5859 19.6484C15.5859 18.7344 15.2812 18.1543 14.9238 17.8496C17.0918 17.6094 19.377 17.3105 19.377 13.5664C19.377 12.5 18.9961 11.9668 18.375 11.2813C18.4746 11.0293 18.8086 9.99219 18.2754 8.64453C17.4609 8.39258 15.5977 9.69336 15.5977 9.69336C14.8242 9.47656 13.9863 9.36523 13.1602 9.36523C12.334 9.36523 11.4961 9.47656 10.7227 9.69336C10.7227 9.69336 8.85938 8.39258 8.04492 8.64453C7.51172 9.98633 7.83984 11.0234 7.94531 11.2813C7.32422 11.9668 7.03125 12.5 7.03125 13.5664C7.03125 17.293 9.2168 17.6094 11.3848 17.8496C11.1035 18.1016 10.8516 18.5352 10.7637 19.1562C10.207 19.4082 8.7832 19.8418 7.93359 18.3418C7.40039 17.416 6.43945 17.3398 6.43945 17.3398C5.49023 17.3281 6.375 17.9375 6.375 17.9375C7.00781 18.2305 7.45312 19.3555 7.45312 19.3555C8.02148 21.0957 10.7402 20.5098 10.7402 20.5098C10.7402 21.3242 10.752 22.6484 10.752 22.8887C10.752 23.1406 10.5762 23.4453 10.0781 23.3574C6.21094 22.0625 3.50391 18.3828 3.50391 14.082C3.50391 8.70312 7.61719 4.61914 12.9961 4.61914C18.375 4.61914 22.7344 8.70312 22.7344 14.082C22.7402 18.3828 20.1152 22.0684 16.248 23.3574ZM10.5 19.7773C10.3887 19.8008 10.2832 19.7539 10.2715 19.6777C10.2598 19.5898 10.3359 19.5137 10.4473 19.4902C10.5586 19.4785 10.6641 19.5254 10.6758 19.6016C10.6934 19.6777 10.6172 19.7539 10.5 19.7773ZM9.94336 19.7246C9.94336 19.8008 9.85547 19.8652 9.73828 19.8652C9.60937 19.877 9.52148 19.8125 9.52148 19.7246C9.52148 19.6484 9.60938 19.584 9.72656 19.584C9.83789 19.5723 9.94336 19.6367 9.94336 19.7246ZM9.14062 19.6602C9.11719 19.7363 9 19.7715 8.90039 19.7363C8.78906 19.7129 8.71289 19.625 8.73633 19.5488C8.75977 19.4727 8.87695 19.4375 8.97656 19.4609C9.09375 19.4961 9.16992 19.584 9.14062 19.6602ZM8.41992 19.3438C8.36719 19.4082 8.25586 19.3965 8.16797 19.3086C8.08008 19.2324 8.05664 19.1211 8.11523 19.0684C8.16797 19.0039 8.2793 19.0156 8.36719 19.1035C8.44336 19.1797 8.47266 19.2969 8.41992 19.3438ZM7.88672 18.8105C7.83398 18.8457 7.73437 18.8105 7.66992 18.7227C7.60547 18.6348 7.60547 18.5352 7.66992 18.4941C7.73437 18.4414 7.83398 18.4824 7.88672 18.5703C7.95117 18.6582 7.95117 18.7637 7.88672 18.8105ZM7.50586 18.2422C7.45313 18.2949 7.36523 18.2656 7.30078 18.207C7.23633 18.1309 7.22461 18.043 7.27734 18.002C7.33008 17.9492 7.41797 17.9785 7.48242 18.0371C7.54687 18.1133 7.55859 18.2012 7.50586 18.2422ZM7.11328 17.8086C7.08984 17.8613 7.01367 17.873 6.94922 17.832C6.87305 17.7969 6.83789 17.7324 6.86133 17.6797C6.88477 17.6445 6.94922 17.627 7.02539 17.6562C7.10156 17.6973 7.13672 17.7617 7.11328 17.8086Z"
        fill="currentColor"
      />
    </svg>
  );
}
