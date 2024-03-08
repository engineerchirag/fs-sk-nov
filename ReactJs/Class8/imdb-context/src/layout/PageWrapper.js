const PageWrapper = ({ children }) => {
  return (
    <div style={{ border: "1px solid red", padding: "15px", margin: "15px" }}>
      {children}
    </div>
  );
};
export default PageWrapper;
