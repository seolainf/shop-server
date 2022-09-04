import Cart from "../models/Cart.js";

export const addCart = async (req, res, next) => {
  try {
    const newCart = new Cart(req.body);
    await newCart.save();
    res.status(200).send("Cart has been create!");
  } catch (err) {
    next(err);
  }
};

export const updateCart = async (req, res, next) => {
  try {
    const updateCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateCart);
  } catch (err) {
    next(err);
  }
};

export const deleteCart = async (req, res, next) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been delete!");
  } catch (err) {
    next(err);
  }
};

export const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    next(err);
  }
};

export const getAllCart = async (req, res, next) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    next(err);
  }
};
