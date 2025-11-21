"use client";
import Styles from "../../styles/Home.module.css";
import styled from "styled-components";

export default function Home() {
  return (
    <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
      <h1 className={Styles.heading}>
        To get started, edit the page.tsx file.
      </h1>
      <StyledHeading>This is styled component</StyledHeading>
    </main>
  );
}

const StyledHeading = styled.h2`
  color: green;
`;
