import { useState } from "react";

import Header from "../../component/common/Header";

const HeaderCntr = () => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return <Header open={open} onOpen={onOpen} onClose={onClose} />;
};

export default HeaderCntr;
