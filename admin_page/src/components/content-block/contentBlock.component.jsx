import "./contentBlock.component.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "../../pages/admin/admin.page";
import EditPage from "../../pages/edit-page/edit-page.page";

const ContentBlock = () => {

  return (
    <div className="contentBlock">
      <BrowserRouter>
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Admin />} />
            <Route path="/:id" element={<EditPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default ContentBlock;
