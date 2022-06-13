interface IMain {
  children: JSX.Element | JSX.Element[];
}

const Main = ({ children }: IMain) => {
  return (
    <main className="main" id="main">
      {children}
    </main>
  );
};

export default Main;
