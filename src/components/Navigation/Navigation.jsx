import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from '../../screens/ContactPage/ContactPage';
import Education from '../../screens/Education/Education';
import HomePage from '../../screens/HomePage/HomePage';
import ProjectPage from '../../screens/ProjectPage/ProjectPage';
import SkillsPage from '../../screens/SkillsPage/SkillsPage';
import WorkPage from '../../screens/WorkPage/WorkPage';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact path="/"
                    element={<HomePage/>}
                />
                <Route
                    path="/education"
                    element={<Education/>}
                />
                <Route
                    path="/contact"
                    element={<ContactPage/>}
                />
                <Route
                    path="/skills"
                    element={<SkillsPage/>}
                />
                 <Route
                    path="/work"
                    element={<WorkPage/>}
                />
                <Route
                    path="/projects"
                    element={<ProjectPage/>}
                />
            </Routes>
        </BrowserRouter>
            )
}

export default Navigation;
