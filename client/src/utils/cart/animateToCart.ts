export const animateToCart = (source: HTMLElement, imageSrc: string) => {
  const cartTriggers = document.querySelectorAll<HTMLElement>(
    "[data-cart-trigger]",
  );

  const cart = Array.from(cartTriggers).find(
    (element) => element.getClientRects().length > 0,
  );

  if (!cart) return;

  const sourceRect = source.getBoundingClientRect();
  const cartRect = cart.getBoundingClientRect();

  const flyingImage = document.createElement("img");

  flyingImage.src = imageSrc;

  Object.assign(flyingImage.style, {
    position: "fixed",
    left: `${sourceRect.left}px`,
    top: `${sourceRect.top}px`,
    width: `${sourceRect.width}px`,
    height: `${sourceRect.height}px`,
    objectFit: "cover",
    borderRadius: "9999px",
    pointerEvents: "none",
    zIndex: "9999",
    transition:
      "transform 1400ms cubic-bezier(0.22, 1, 0.36, 1), opacity 1100ms ease",
  });

  document.body.appendChild(flyingImage);

  requestAnimationFrame(() => {
    const deltaX =
      cartRect.left +
      cartRect.width / 2 -
      (sourceRect.left + sourceRect.width / 2);

    const deltaY =
      cartRect.top +
      cartRect.height / 2 -
      (sourceRect.top + sourceRect.height / 2);

    flyingImage.style.transform = `
      translate(${deltaX}px, ${deltaY}px)
      scale(0.2)
    `;

    flyingImage.style.opacity = "0";
  });

  flyingImage.addEventListener(
    "transitionend",
    () => {
      flyingImage.remove();

      cart.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.15)" },
          { transform: "scale(0.97)" },
          { transform: "scale(1)" },
        ],
        {
          duration: 500,
          easing: "ease-out",
        },
      );
    },
    { once: true },
  );
};
