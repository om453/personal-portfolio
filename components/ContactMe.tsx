import Link from "next/link";
import React from "react";

function ContactMe() {
  return (
    <section id="contact">
    <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <div className="space-y-3">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            Contact
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Want to chat? Just shoot me a dm{" "}
            <Link
              href={"https://x.com/Om1111X"}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              with a direct question on twitter
            </Link>{" "}
            or email me directly at{" "}
            <Link
              href={"mailto:om.patel200212@gmail.com"}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
             om.patel200212@gmail.com
            </Link>  
          </p>
        </div>
    </div>
  </section>
  );
}

export default ContactMe;
