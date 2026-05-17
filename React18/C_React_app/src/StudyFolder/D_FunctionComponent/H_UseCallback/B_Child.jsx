import React, { useState, useEffect } from "react";
function Child ({ fn }) {
    console.log('子组件渲染了');
    return (
        <div>
            <h1>Child Component</h1>
            <button onClick={fn}>调用函数</button>
        </div>
    )

}
export default Child;