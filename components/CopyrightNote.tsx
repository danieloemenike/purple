


export default function CopyrightNote() {
    const menuitems = [
        {
            id: 1,
            name: "Privacy Policy"
        },
        {
            id: 2,
            name: "Terms Of Use"
        },
        {
            id: 3,
            name: "Brand Guide"
        },

    ]
    return (
        <>
            <section className="flex justify-between w-full items-center mt-[24px]">
                <p className="text-[14px] text-[#6E6D7A]">Copyright © 2023. All rights reserved </p>

                <nav className="flex space-x-[17px] ">
                    { menuitems.map(menu => (
                        <h6 key={menu.id} className="text-[14px] text-[#6E6D7A]"> {menu.name} </h6> 
                    ))}
                </nav>

            </section>
            </>
    )
}