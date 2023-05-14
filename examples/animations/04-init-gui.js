const initGui = (obj) => {
    var gui = new dat.gui.GUI();

    gui.remember(obj);

    gui.add(obj, 'fl').min(100).max(1000).step(10);
    gui.add(obj, 'zpos').min(-1000).max(1000).step(10);
    gui.add(obj, 'speed').min(0).max(1).step(0.01);
    gui.add(obj, 'centerX').min(0).max(400).step(10);
    gui.add(obj, 'centerY').min(0).max(400).step(10);

    return { gui, obj };
}