from tensorflow.keras.models import load_model
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)
model = load_model("./new_ann_model.keras")


@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    inputs = np.array(data["data"]).reshape(1, -1)
    prediction = model.predict(inputs)[0]
    envs = ["Cafe ☕", "Home 🏠", "Library 📚", "Park 🌲"]
    predicted_class = np.argmax(prediction)
    propapilites = [f"{envs[i]} :{prediction[i]:.2f} " for i in range(len(envs))]
    # print(propapilites)
    return jsonify(
        {
            "prediction": envs[predicted_class],
            "propapilites": propapilites,
        }
    )


if __name__ == "__main__":
    app.run(debug=True)
