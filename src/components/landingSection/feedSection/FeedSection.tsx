import styles from './feed.section.module.css';
import FeedDivider from './FeedDivider.tsx';
import FeedBlock from './FeedBlock.tsx';
import FeedIcon from './FeedIcon.tsx';
import Button from '../../Buttons/Button.tsx';
import Arrow from '../../Buttons/icons/Arrow.tsx';
import classNames from 'classnames';


const FeedSection = () => {
  return (
    <section className={styles.feed}>
      <div className="container">
        <h2 className={styles.feed__title}>pay and feed</h2>
        <FeedDivider title="01" />
        <FeedBlock title="Your donation has an impact" text="Providing our animals with high-quality nutritious diets is just
              one
              element of animal care at our Zoo. We do all the best so that our animals can eat food similar
              to
              what they might find in their natural habitats while making sure they get the right mix of
              nutrients, proteins, and vitamins to be happy and healthy. Please help us provide nutritious
              food
              for our animals by donating." pathToImg="/images/monkey.png" imgDesc="Monkey"
                   icon={<FeedIcon iconType="heart" />} />
        <FeedDivider title="02" />
        <FeedBlock title="Make a donation" text="You can donate through your credit card without any fees. It is
              easy and
              safe. We do not keep donors' personal information on an online network. Choose an amount to give
              and
              the pet's name if needed." pathToImg="/images/bananas.png" imgDesc="bananas"
                   icon={<FeedIcon iconType="card" />} />


        <FeedDivider title="03" />
        <FeedBlock title="Bring your food charity — straight to your favorites pets." text="After your donation, the animal receives its favorite foods. You
              can
              support
              your favorite animals or any animal you care about and make a real personal impact. Never doubt
              that
              your donation can make a difference even if it is small."
                   pathToImg="/images/monkeyEats.png" imgDesc="Monkey with banana"
                   icon={<FeedIcon iconType="vegetable" />} />


        <div className={styles.button__container}>
          <div className={styles.emptyBlock}></div>
          <div className={styles.button__wrapper}>
            <Button text="donate now" extraClass={classNames('mobile-block', styles.feed__button)} icon={<Arrow />} id="donate-now-btn" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeedSection;