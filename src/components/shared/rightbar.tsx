import { Input } from '../ui/input';

export default function Rightbar() {
  return (
    <div className="hidden w-[100px] flex-col sm:hidden sm:min-w-[100px] md:flex lg:w-[600px]">
      <div className="sticky right-0 top-0 bg-white p-3">
        <Input type="text" placeholder="Search" />
      </div>

      <section className="hidden h-screen min-w-[300px] border sm:flex">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugiat delectus molestiae laborum totam omnis quisquam aliquam
        repellendus architecto recusandae quod, dolores id in soluta
        reiciendis porro harum pariatur. Fuga, commodi?
      </section>
    </div>
  );
}
