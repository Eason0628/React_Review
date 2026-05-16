import React, { useState, useEffect } from "react";
function Child ({ price, count }) {
    console.log('子组件渲染了');
    return (
        <div>
            <h1>{price * count}</h1>
        </div>
    )

}
export default Child;