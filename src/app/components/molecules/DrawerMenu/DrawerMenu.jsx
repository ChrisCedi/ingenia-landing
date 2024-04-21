import { Drawer } from "@/components/atoms/MaterialTailwindComponent";
import { LinkHeader } from "@/app/atoms/LinkHeader";
import { routes } from "../Header/routes";

export const DrawerMenu = ({ openDrawer, closeDrawer }) => {
  return (
    <Drawer
      placement="right"
      open={openDrawer}
      onClose={closeDrawer}
      className="p-4"
    >
      <div className="mb-6 flex flex-col justify-between items-center h-2/6">
        <div onClick={closeDrawer}>
          <LinkHeader route={routes.about}>ABOUT US</LinkHeader>
        </div>
        <div onClick={closeDrawer}>
          <LinkHeader onClick={closeDrawer} route={routes.work}>
            OUR WORK
          </LinkHeader>
        </div>
        <div onClick={closeDrawer}>
          <LinkHeader onClick={closeDrawer} route={routes.contact}>
            CONTACT
          </LinkHeader>
        </div>
        <div onClick={closeDrawer}>
          <LinkHeader onClick={closeDrawer} route={routes.manifest}>
            MANIFIESTO
          </LinkHeader>
        </div>
      </div>
    </Drawer>
  );
};
