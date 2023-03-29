export const Footer = () => {
  return (
    <div className="flex flex-col w-screen bg-[#f2f2f2] justify-around text-sm text-[#676b74]">
      <div className="pt-3 pb-3 ml-8">
        <p>India</p>
      </div>
      <hr />
      <div className="flex justify-between pt-4 pb-4 mr-8 ml-8 ">
        <div className="flex space-x-4">
          <p>About</p>
          <p>Advertisement</p>
          <p>Business</p>
          <p>How Search works</p>
        </div>
        <div className="flex space-x-4">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};
