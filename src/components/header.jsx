import React from "react";

const Header = () => {
  return (
    <div className="flex-1 hidden items-start sm:flex flex-row space-x-2 header">
    
      <a
        class="capitalize no-underline hover:bg-blue-50 focus:bg-blue-100 font-semibold leading-6 py-2 px-4 rounded-full text-primary"
        href="/doctors"
      >
        doctors
      </a>
      <a
        class="capitalize no-underline hover:bg-blue-50 focus:bg-blue-100 font-bold leading-6 py-2 px-4 rounded-full text-primary"
        href="/search?type=institution"
      >
        institutions
      </a>

      <div class="flex flex-row items-center">
        <button
          class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"
          tabindex="0"
          type="button"
        >
         <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SearchIcon"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
          <span class="MuiTouchRipple-root css-w0pj6f"></span>
        </button>
        <div class="mr-2">
          <button
            class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1a4i8lz  signin-button"
            tabindex="0"
            type="button"
          >
            Sign In<span class="MuiTouchRipple-root css-w0pj6f"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
