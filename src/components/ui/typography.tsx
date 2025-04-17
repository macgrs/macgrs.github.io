import React from 'react';

interface Props {
    className?: string;
    href?: string;
    children: string;
}

const H1: React.FC<Props> = ({className, children}) => {
    return (
      <h1 className={`font-[PPNeueMontrealBold] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl ${className}`}>
        {children}
      </h1>
    )
  }

  const H2: React.FC<Props> = ({className, children}) => {
    return (
      <h2 className={`font-[PPNeueMontrealBold] scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 lg:text-4xl ${className}`}>
        {children}
      </h2>
    )
  }

  const H3: React.FC<Props> = ({className, children}) => {
    return (
      // <h3 className={`whitespace-pre-line font-[PPNeueMontrealRegular] scroll-m-20 text-2xl tracking-tight lg:text-2xl ${className}`}>
      <h3 className={`whitespace-pre-line scroll-m-20 text-2xl tracking-tight lg:text-2xl ${className}`}>
        {children}
      </h3>
    )
  }
    // const H3: React.FC<Props> = ({className, children}) => {
  //   return (
  //     <h3 className={`font-[PPNeueMontrealRegular] scroll-m-20 text-2xl mt-10 tracking-tight lg:text-2xl ${className}`}>
  //      {/* <h3 className={`text-lg font-bold text-gray-900 leading-snug ${className}`}> */}
  //       {children}
  //     </h3>
  //   )
  // }

  const H4: React.FC<Props> = ({className, children}) => {
    return (
      <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
        {children}
      </h4>
    )
  }
  

  const P: React.FC<Props> = ({className, children}) => {
    return (
      // <p className={`whitespace-pre-line font-[PPNeueMontrealRegular] tracking-wide leading-7 [&:not(:first-child)]:mt-4 lg:text-lg ${className}`}>
      <p className={`whitespace-pre-line text-base leading-relaxed text-gray-800 dark:text-stone-200 [&:not(:first-child)]:mt-4 lg:text-lg ${className}`}>
       {children}
      </p>
    )
  }

  const C: React.FC<Props> = ({className, children}) => {
    return (
      // <p className={`mx-2 font-[PPNeueMontrealRegular] whitespace-pre-line italic leading-6 [&:not(:first-child)]:mt-2 lg:text-base ${className}`}>
      <p className={`mx-2 whitespace-pre-line italic leading-6 [&:not(:first-child)]:mt-2 lg:text-lg ${className}`}>
       {children}
      </p>
    )
  }

  const A: React.FC<Props> = ({className, children, href}) => {
    // leading-7 [&:not(:first-child)]:mt-6
    return (
      <a href={href} className={`whitespace-pre-line text-blue-600 dark:text-blue-500 hover:underline  ${className}`}>
       {children}
      </a>
    )
  }
  

  const Blockquote: React.FC<Props> = ({className, children}) => {
    return (
      <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`}>
        {children}
      </blockquote>
    )
  }

  const InlineCode: React.FC<Props> = ({className, children}) => {
    return (
      <code className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className}`}>
        {children}
      </code>
    )
  }
  

  const Lead: React.FC<Props> = ({className, children}) => {
    return (
      <p className={`text-xl text-muted-foreground ${className}`}>
        {children}
      </p>
    )
  }
  

  const Large: React.FC<Props> = ({className, children}) => {
    return <div className={`text-lg font-semibold ${className}`}>{children}</div>
  }
  

  const Muted: React.FC<Props> = ({className, children}) => {
    return (
      <p className={`text-sm text-muted-foreground ${className}`}>{children}.</p>
    )
  }
  
  export { H1, H2, H3, H4, P, C, A, Lead, Large, Muted, Blockquote, InlineCode}


