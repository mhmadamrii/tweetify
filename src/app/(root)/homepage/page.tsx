import Link from 'next/link';
import TweetLists from '~/components/shared/tweet-lists';

import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/homepage/user?onboarding=true" className="block">
        Homepage intercepting route
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Soluta eaque atque officiis reiciendis ab alias mollitia
        exercitationem, libero aut ea id modi quaerat voluptates
        deserunt ipsam consequuntur asperiores. Cupiditate, error?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
        eveniet culpa velit at vitae eius quaerat molestiae non vel
        sequi, voluptate nisi optio aut repellendus accusamus tempore
        earum error amet laborum! Ex laudantium, odio quos nobis quod
        esse nihil id ab. Totam ex voluptas officia. Molestias dolorem
        adipisci soluta magni alias, natus veritatis voluptates est
        architecto numquam aperiam voluptatem animi laboriosam dolor,
        id similique corporis labore inventore libero esse rem saepe
        in ex. Amet iure voluptatibus hic? Amet, iusto laudantium
        officia perspiciatis iure veniam laboriosam! Ut, eaque nisi
        minus ipsa dolorum eos nobis hic cumque, quis velit iure et
        eveniet sit dolorem expedita harum reiciendis quas natus
        corporis! Soluta impedit, perferendis illum ut eius nemo,
        cupiditate facere similique saepe voluptates delectus, quam
        aut? Tenetur, consectetur! Quam beatae excepturi tempore
        veritatis corrupti quaerat nisi aut sed perferendis repellat.
        Velit tenetur laboriosam eius harum perferendis vel ipsum
        recusandae, voluptatum quia praesentium rem, facilis
        consequuntur non esse hic possimus rerum quas molestias
        dolores officiis neque. Fuga omnis ab, totam pariatur neque
        fugit alias a mollitia magni numquam. Reprehenderit distinctio
        rerum velit ea, aliquid doloremque sunt impedit odio non
        magnam harum adipisci? Earum nesciunt quasi excepturi magnam
        consectetur tempora ipsa voluptates quos. Dolorem eligendi,
        enim omnis sed a inventore nulla. Incidunt error quo
        praesentium aliquid fuga iste rerum est, accusantium, unde
        soluta esse sapiente laborum. Blanditiis obcaecati praesentium
        esse, sapiente molestias eveniet amet cumque sed voluptate
        sunt doloribus. Saepe esse sed veritatis labore, numquam
        architecto quod veniam ducimus. Quis nesciunt quos ex, magnam
        itaque deleniti ad sapiente. Ipsam cumque laborum quia commodi
        eaque aperiam dignissimos quas! Voluptatem vitae dolore,
        accusamus similique iusto numquam eius dolores voluptate
        tempore atque sunt nesciunt maiores ipsa, itaque dignissimos
        quos nostrum vero impedit, veniam animi et sit. Porro ipsa
        esse consequatur libero nihil animi suscipit facere delectus
        eveniet tempore?
      </p>
      <Suspense fallback={<span>Loading contents....</span>}>
        <TweetLists />
      </Suspense>
    </div>
  );
}
