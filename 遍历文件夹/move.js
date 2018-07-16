function move (element, target) {
			// 我们将定时器的标识保存到元素的属性(自定义)中，好处：1 多个元素的属性无关 2 一个元素的属性可以多次访问
			clearInterval(element.timer); // 防止加速
			element.timer = setInterval(function () {
				// 1 获取元素当前位置
				var current = element.offsetLeft;
				// 2 设置步长公式：(目标位置 - 当前位置) / 10
				var step = (target - current) / 10;
				// 设置检测，根据step的正负设置不同的取整方式
				step = step > 0 ? Math.ceil(step) : Math.floor(step);

				// 3 套用运动公式：元素的位置(新) = 元素的位置(旧) + 步长
				current += step;
				// 4 将新的位置值设置给left属性
				element.style.left = current + 'px';

				// 5 清除定时器
				if (current === target) {
					clearInterval(element.timer);
				}
			}, 20);
		}