# github-badge
灵感来源于 [vue-github-badge](https://github.com/egoist/vue-github-badge)，但不受限于框架

## Usage

```javascript
<srcript src="https://cdn.jsdelivr.net/gh/pigsking/github-badge@master/dist/gihub-badge.min.js"></script>

const badge = new Badge({
    repository: "pigsking/github-badge",
    width: 66,
    height: 66,
    fill: '#3f51b5'
});
badge.init();
```
## API

**repository**:
- Type: `string`
- Required: `true`

Github 仓库（所有者/仓库名）

**width**
- Type:`number`
- Required: `false`
- Default: `32`

badge 宽度

**height**
- Type:`number`
- Required: `false`
- Default: `32`


badge 高度

**fill**
- Type:`string`
- Required: `false`
- Default: `#171515`

badge 填充背景

## Examples

- [vue-mark-calendar](https://github.com/pigsking/vue-mark-calendar)


## License

[MIT](https://github.com/pigsking/github-badge/blob/master/LICENSE)