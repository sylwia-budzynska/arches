# Generated by Django 2.2.13 on 2020-10-09 19:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("models", "6492_add_date_datatype_configs"),
    ]

    def forward_migrate(apps, schema_editor, with_create_permissions=True):
        node_model = apps.get_model("models", "Node")
        edge_model = apps.get_model("models", "Edge")
        for node in node_model.objects.filter(istopnode=False):
            parent_node = edge_model.objects.get(rangenode=node).domainnode.nodeid
            sibling_nodes = [edge.rangenode.name for edge in edge_model.objects.filter(domainnode=parent_node)]
            if node.name in sibling_nodes:
                sibling_nodes.remove(node.name)
            if node.name in sibling_nodes:
                node.name = "{}_{}".format(node.name, node.nodeid)
                node.save()

    def reverse_migrate(apps, schema_editor, with_create_permissions=True):
        node_model = apps.get_model("models", "Node")
        nodes = node_model.objects.filter(istopnode=False)
        for node in nodes:
            if node.name[-36:] == str(node.nodeid):
                node.name = node.name[:-37]
                node.save()

    sql =   """
                UPDATE nodes AS n1
                SET name = n1.name || '_' || n1.nodeid
                WHERE EXISTS (
                    SELECT n1.nodeid
                    FROM nodes AS n2
                    WHERE n1.nodeid <> n2.nodeid
                    AND n1.name = n2.name
                    AND n1.nodegroupid = n2.nodegroupid
                );
            """
    reverse_sql =   """
                        UPDATE nodes
                        SET name = substring(name from 0 for length(name) - 36)
                        where substring(name from length(name) - 35 for 36) = nodeid::text
                    """

    operations = [
        migrations.RunPython(forward_migrate, reverse_migrate),
        migrations.RunSQL(sql, reverse_sql),
        migrations.AddConstraint(
            model_name="node", constraint=models.UniqueConstraint(fields=("name", "nodegroup"), name="unique_nodename_nodegroup"),
        ),
    ]
