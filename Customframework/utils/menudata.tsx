import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { ContactPage as ContactPageIcon } from "@mui/icons-material";

export const body =
  "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reiciendis eos, reprehenderit, soluta maxime labore assumenda, velit dolores aliquid corporis accusantium! Recusandae nulla modi dicta, tempora impedit beatae eveniet atque.";
export const url =
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80";

export const menuItems = [
  {
    label: "Home",
    icon: <HomeIcon />,
    subMenuItems: ["Sub Menu 1", "Sub Menu 2", "Sub Menu 3"],
  },
  {
    label: "Contact",
    icon: <ContactPageIcon />,
    subMenuItems: ["Sub Menu 4", "Sub Menu 5", "Sub Menu 6"],
  },
  {
    label: "About",
    icon: <InfoIcon />,
  },
  {
    label: "Menu 4",
    icon: <ContactPageIcon />,
  },
  {
    label: "Menu 5",
    icon: <ContactPageIcon />,
    subMenuItems: ["Sub Menu 7", "Sub Menu 8", "Sub Menu 9"],
  },
];

export const options = [
  { value: "1", label: "Label 1" },
  { value: "2", label: "Label 2" },
  { value: "3", label: "Label 3" },
  { value: "4", label: "Label 4" },
  { value: "5", label: "Label 5" },
  { value: "6", label: "Label 6" },
  { value: "7", label: "Label 7" },
];
export const steps = [
  {
    label: "1",
    content: (
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente porro
        sint doloribus sequi eligendi obcaecati, rerum, quisquam ipsam eum hic
        sed excepturi saepe ipsum laboriosam officia aut, minus consectetur
        repellat!
      </div>
    ),
  },
  {
    label: "2",
    content: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure numquam
        tenetur nobis distinctio, quisquam, reiciendis nam nisi laboriosam sit
        quos quae dolore ut ipsam eos consequatur itaque atque ipsa repudiandae.
      </div>
    ),
  },
  {
    label: "3",
    content: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ex
        sed harum doloremque, id quae non, accusantium alias labore, dignissimos
        saepe eveniet quaerat nostrum. Ab laudantium fugit in eligendi earum.
      </div>
    ),
  },
  {
    label: "4",
    content: (
      <div>
        met, consectetur adipisicing elit. Aspernatur ex sed harum doloremque,
        id quae non, accusantium alias labore, dignissimos saepe eveniet quaerat
        nostrum. Ab lLorem ipsum dolor sit aaudantium fugit in eligendi earum.
      </div>
    ),
  },
];
